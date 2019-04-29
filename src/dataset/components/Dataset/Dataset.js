import React, { useCallback, useRef } from 'react'
import { css } from 'styled-components'
import Radio from '../../../icons/Radio'
import Upload from '../../../icons/Upload'
import { capitalize } from '../../../utils/string'
import {
  selectDataset,
  setRawData,
  requestCustomDataset,
  changeName,
} from '../../actions'
import {
  selectedDatasetIdSelector,
  datasetsSelector,
  datasetIdsSelector,
} from '../../selectors'
import { useRedux } from '../../../hooks'
import Properties from '../Properties'
import Heading from '../Heading'
import TextInput from '../../../ui/components/TextInput'
import { List, Item } from './styles'

const labelStyle = css`
  margin-left: 8px;
`

const mapStateToProps = {
  selectedDatasetId: selectedDatasetIdSelector,
  datasets: datasetsSelector,
  datasetIds: datasetIdsSelector,
}

const Dataset = () => {
  const uploadRef = useRef()
  const { dispatch, selectedDatasetId, datasets, datasetIds } = useRedux(
    mapStateToProps
  )

  const handleClick = useCallback(id => () => dispatch(selectDataset(id)), [
    dispatch,
  ])

  const handleCustomData = useCallback(() => {
    dispatch(requestCustomDataset(uploadRef.current))
  }, [dispatch])

  const handleFiles = useCallback(
    e => {
      if (e.target.files.length > 0) {
        const reader = new FileReader()

        reader.onload = e => {
          dispatch(setRawData(e.target.result))
        }

        reader.readAsText(e.target.files[0])
      }
    },
    [dispatch]
  )

  const handleNameChange = useCallback(
    datasetId => e => dispatch(changeName(datasetId, e.target.value)),
    [dispatch]
  )

  return (
    <>
      <div css="grid-column: full;">
        <Heading>Select data</Heading>
        <List>
          {datasetIds.map(id => (
            <Item key={id} onClick={handleClick(id)}>
              <Radio size={22} checked={selectedDatasetId === id} />
              {datasets[id].mutable ? (
                <TextInput
                  css={labelStyle}
                  value={datasets[id].name}
                  onChange={handleNameChange(id)}
                />
              ) : (
                <span css={labelStyle}>{capitalize(datasets[id].name)}</span>
              )}
            </Item>
          ))}
          <Item as="button" onClick={handleCustomData}>
            <Upload />
            <input
              ref={uploadRef}
              type="file"
              accept="text/csv"
              css="display: none;"
              onChange={handleFiles}
            />
            <span css={labelStyle}>Upload custom data</span>
          </Item>
        </List>
      </div>
      <Properties />
    </>
  )
}

export default Dataset
