import React, { memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Select, Grow, Bold } from './style'

const StyledAxisSelection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const AxisSelection = ({ onChange, name, value, options, ...restProps }) => {
  return (
    <StyledAxisSelection {...restProps}>
      <Bold>Select {name}:</Bold>
      <Grow />
      <Select
        value={{ value, label: value }}
        onChange={onChange}
        options={options.map(label => ({ value: label, label }))}
      />
    </StyledAxisSelection>
  )
}

AxisSelection.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default memo(AxisSelection)
