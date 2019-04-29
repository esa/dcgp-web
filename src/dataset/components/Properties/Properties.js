import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import {
  pointsSelector,
  selectedDatasetSelector,
  labelsSelector,
} from '../../selectors'
import { changeLabel, changeColumnType, columnTypes } from '../../actions'
import Radio from '../../../icons/Radio'
import TextInput from '../../../ui/components/TextInput'
import Heading from '../Heading'
import { Table, Column, Cell } from './styles'

const arrayOfLength = length => Array(length).fill(0)

const radioLabels = ['Input', 'Output', 'Ignore']

const isRadioChecked = (dataset, type, columnIndex) => {
  const { inputs, outputs } = dataset

  // 'INPUT'
  if (type === columnTypes[0]) {
    return inputs.includes(columnIndex)
  }

  // 'OUTPUT'
  if (type === columnTypes[1]) {
    return outputs.includes(columnIndex)
  }

  // 'NONE'
  if (type === columnTypes[2]) {
    return !inputs.includes(columnIndex) && !outputs.includes(columnIndex)
  }
}

const renderCellLabel = (
  column,
  row,
  { points, labels, dataset, handleLabelChange, handleTypeChange }
) => {
  const columnIndex = column - 1
  const rowIndex = row - columnTypes.length

  if (row >= 1 && row < columnTypes.length + 1) {
    if (column === 0) return radioLabels[row - 1]

    const rowType = columnTypes[row - 1]

    return (
      <div
        css="cursor: pointer; display: flex; width: 100%;"
        onClick={handleTypeChange(columnIndex, rowType)}
      >
        <Radio
          size={22}
          checked={isRadioChecked(dataset, rowType, columnIndex)}
        />
      </div>
    )
  }

  if (row === 0) {
    if (column === 0) return 'Name'

    return (
      <TextInput
        value={labels[columnIndex]}
        onChange={handleLabelChange(columnIndex)}
      />
    )
  }

  if (row === 7) {
    if (column === 0) return null

    return '...'
  }

  if (column === 0) {
    return `Row ${rowIndex}`
  }

  return points[columnIndex][rowIndex]
}

const mapStateToProps = {
  labels: labelsSelector,
  dataset: selectedDatasetSelector,
  points: pointsSelector,
}

const Properties = () => {
  const { dataset, labels, points, dispatch } = useRedux(mapStateToProps)

  const handleLabelChange = useCallback(
    columnIndex => e =>
      dispatch(changeLabel(dataset.id, columnIndex, e.target.value)),
    [dataset.id, dispatch]
  )

  const handleTypeChange = useCallback(
    (columnIndex, type) => () =>
      dispatch(changeColumnType(dataset.id, columnIndex, type)),
    [dataset.id, dispatch]
  )

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
