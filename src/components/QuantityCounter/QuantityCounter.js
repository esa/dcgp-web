import React from 'react'
import AddCircle from '../../icons/AddCircle'
import SubtractCircle from '../../icons/SubtractCircle'
import { Wrapper, Input, Button } from './style'

const QuantityCounter = ({ value, onChange, min, max }) => {
  const handleDecrement = () =>
    onChange({ target: { valueAsNumber: value - 1 } })
  const handleIncrement = () =>
    onChange({ target: { valueAsNumber: value + 1 } })

  return (
    <Wrapper>
      <Button onClick={handleDecrement} title="Decrement">
        <SubtractCircle />
      </Button>
      <Input value={value} min={min} max={max} onChange={onChange} />
      <Button onClick={handleIncrement} title="Increment">
        <AddCircle />
      </Button>
    </Wrapper>
  )
}

export default QuantityCounter
