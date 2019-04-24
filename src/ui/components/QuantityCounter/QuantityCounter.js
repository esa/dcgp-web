import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import AddCircle from '../../../icons/AddCircle'
import SubtractCircle from '../../../icons/SubtractCircle'
import { Wrapper, Input, Button } from './style'

const QuantityCounter = ({
  value,
  onChange,
  min,
  max,
  tabIndex,
  ...restProps
}) => {
  const handleInputChange = useCallback(
    event => {
      const val = event.target.valueAsNumber

      if (isNaN(val)) {
        onChange(min)
      } else if (val > max) {
        onChange(max)
      } else if (val < min) {
        onChange(min)
      } else {
        onChange(val)
      }
    },
    [onChange, min, max]
  )

  const handleDecrement = () => onChange(value - 1)
  const handleIncrement = () => onChange(value + 1)

  return (
    <Wrapper {...restProps}>
      <Button
        onClick={handleDecrement}
        title="Decrement"
        disabled={value <= min}
        tabIndex={-1}
      >
        <SubtractCircle />
      </Button>
      <Input
        value={value}
        min={min}
        max={max}
        onChange={handleInputChange}
        tabIndex={tabIndex}
      />
      <Button
        onClick={handleIncrement}
        title="Increment"
        disabled={value >= max}
        tabIndex={-1}
      >
        <AddCircle />
      </Button>
    </Wrapper>
  )
}

QuantityCounter.defaultProps = {
  tabIndex: 0,
}

QuantityCounter.propTypes = {
  tabIndex: PropTypes.number.isRequired,
}

export default QuantityCounter
