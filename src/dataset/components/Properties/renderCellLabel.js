import React from 'react'
import { columnTypes } from '../../actions'
import Radio from '../../../icons/Radio'
import TextInput from '../../../ui/components/TextInput'

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

  return points[columnIndex][rowIndex].toExponential(3)
}

export default renderCellLabel
