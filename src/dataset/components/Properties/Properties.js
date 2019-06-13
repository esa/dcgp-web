import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  pointsSelector,
  selectedDatasetSelector,
  labelsSelector,
} from '../../selectors'
import { changeLabel, changeColumnType } from '../../actions'
import Heading from '../Heading'
import { Table, Column, Cell } from './styles'
import renderCellLabel from './renderCellLabel'

const arrayOfLength = length => Array(length).fill(0)

const Properties = () => {
  const labels = useSelector(labelsSelector)
  const dataset = useSelector(selectedDatasetSelector)
  const points = useSelector(pointsSelector)
  const dispatch = useDispatch()

  const handleLabelChange = columnIndex => e =>
    dispatch(changeLabel(dataset.id, columnIndex, e.target.value))

  const handleTypeChange = (columnIndex, type) => () =>
    dispatch(changeColumnType(dataset.id, columnIndex, type))

  if (!dataset.mutable) {
    return null
  }

  const numberOfRows = Math.min(8, dataset.points.length + 4)

  return (
    <div css="grid-column: full; min-width: 0;">
      <Heading>Data properties</Heading>
      <Table>
        {arrayOfLength(labels.length + 1).map((_, i) => (
          <Column key={i}>
            {arrayOfLength(numberOfRows).map((_, j) => (
              <Cell column={i} row={j} key={j}>
                {renderCellLabel(i, j, {
                  dataset,
                  handleLabelChange,
                  handleTypeChange,
                  points,
                  labels,
                })}
              </Cell>
            ))}
          </Column>
        ))}
      </Table>
    </div>
  )
}

export default Properties
