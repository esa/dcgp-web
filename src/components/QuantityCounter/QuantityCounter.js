import React, { useCallback } from 'react'
import AddCircle from '../../icons/AddCircle'
import SubtractCircle from '../../icons/SubtractCircle'
import { Wrapper, Input, Button } from './style'

const QuantityCounter = ({ value, onChange, min, max }) => {
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
    [onChange]
  )

  const handleDecrement = () => onChange(value - 1)
  const handleIncrement = () => onChange(value + 1)

  return (
    <Wrapper>
      <Button
        onClick={handleDecrement}
        title="Decrement"
        disabled={value <= min}
      >
        <SubtractCircle />
      </Button>
      <Input value={value} min={min} max={max} onChange={handleInputChange} />
      <Button
        onClick={handleIncrement}
        title="Increment"
        disabled={value >= max}
      >
        <AddCircle />
      </Button>
    </Wrapper>
  )
}

export default QuantityCounter
