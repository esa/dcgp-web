import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Select, Grow, Bold } from './style'

const AxisSelection = ({ onChange, name, value, options }) => {
  return (
    <div css="display: flex; align-items: center; margin-bottom: 8px;">
      <Bold>Select {name}:</Bold>
      <Grow />
      <Select
        value={{ value, label: value }}
        onChange={onChange}
        options={options.map(label => ({ value: label, label }))}
      />
    </div>
  )
}

AxisSelection.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default memo(AxisSelection)
