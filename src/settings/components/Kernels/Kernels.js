import React from 'react'
import CheckBox from '../../../icons/CheckBox'
import { useSelector, useDispatch } from 'react-redux'
import { capitalize } from '../../../utils/string'
import { toggleKernel, kernelNamesById } from '../../actions'
import { kernelsSelector } from '../../selectors'
import Container from '../Container'
import List from '../List'
import { Row } from './style'

const kernelIds = Object.keys(kernelNamesById)

const Kernels = () => {
  const kernels = useSelector(kernelsSelector)
  const dispatch = useDispatch()

  const handleChange = kernelId => () => dispatch(toggleKernel(kernelId))

  return (
    <Container title="Kernels">
      <List>
        {kernelIds.map(kernelId => (
          <Row
            key={kernelId}
            checked={kernels[kernelId]}
            onClick={handleChange(kernelId)}
          >
            <CheckBox checked={kernels[kernelId]} />
            {capitalize(kernelNamesById[kernelId])}
          </Row>
        ))}
      </List>
    </Container>
  )
}

export default Kernels
