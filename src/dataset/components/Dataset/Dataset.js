import React, { useCallback } from 'react'
import styled from 'styled-components'
import Radio from '../../../icons/Radio'
import { capitalize } from '../../../utils/string'
import { pointsPresetsById, changeDataset } from '../../actions'
import { datasetIdSelectore } from '../../selectors'
import { useRedux } from '../../../hooks'

const presetIds = Object.keys(pointsPresetsById)

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 600;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`

const Label = styled.span`
  margin-left: 8px;
`

const mapStateToProps = {
  datasetId: datasetIdSelectore,
}

const Dataset = () => {
  const { dispatch, datasetId } = useRedux(mapStateToProps)
  const handleClick = useCallback(id => () => dispatch(changeDataset(id)), [
    dispatch,
  ])

  return (
    <div css="grid-column: full;">
      <Heading>Select data</Heading>
      <List>
        {presetIds.map(id => (
          <Item key={id} onClick={handleClick(id)}>
            <Radio checked={datasetId === id} />
            <Label>{capitalize(pointsPresetsById[id].label)}</Label>
          </Item>
        ))}
      </List>
    </div>
  )
}

export default Dataset
