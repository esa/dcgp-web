import React, { useCallback } from 'react'
import CheckBox from '../../../icons/CheckBox'
import { useRedux } from '../../../hooks'
import { capitalize } from '../../../utils/string'
import { toggleKernel, kernelNamesById } from '../../actions'
import { kernelsSelector } from '../../selectors'
import Container from '../Container'
import { List, Row } from './style'

const kernelIds = Object.keys(kernelNamesById)

const mapStateToProps = {
  kernels: kernelsSelector,
}

const Kernels = () => {
  const { dispatch, kernels } = useRedux(mapStateToProps)

  const handleChange = useCallback(
    kernelId => () => dispatch(toggleKernel(kernelId)),
    [dispatch]
  )

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
