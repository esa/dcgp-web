import React, { useRef } from 'react'
import { css } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
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
import Properties from '../Properties'
import Heading from '../Heading'
import TextInput from '../../../ui/components/TextInput'
import { List, Item } from './styles'

const labelStyle = css`
  margin-left: 8px;
`

const Dataset = () => {
  const uploadRef = useRef()
  const selectedDatasetId = useSelector(selectedDatasetIdSelector)
  const datasets = useSelector(datasetsSelector)
  const datasetIds = useSelector(datasetIdsSelector)
  const dispatch = useDispatch()

  const handleClick = id => () => dispatch(selectDataset(id))
  const handleCustomData = () =>
    dispatch(requestCustomDataset(uploadRef.current))

  const handleFiles = e => {
    if (e.target.files.length > 0) {
      const reader = new FileReader()
      const file = e.target.files[0]

      reader.onload = e => {
        dispatch(setRawData({ name: file.name, data: e.target.result }))
      }

      reader.readAsText(file)
    }
  }

  const handleNameChange = datasetId => e =>
    dispatch(changeName(datasetId, e.target.value))

  return (
    <>
      <div css="grid-column: full; margin-top: 30px;">
        <Heading>Select dataset</Heading>
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
