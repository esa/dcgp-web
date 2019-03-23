import React, { useCallback } from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useRedux } from '../../../hooks'
import { toggleKernel, kernelNamesById } from '../../actions'
import { kernelsSelector } from '../../selectors'
import Container from '../Container'

const kernelIds = Object.keys(kernelNamesById)

const Kernels = () => {
  const { dispatch, getState } = useRedux()
  const state = getState()
  const kernels = kernelsSelector(state)

  const handleChange = useCallback(
    kernelId => () => dispatch(toggleKernel(kernelId)),
    [dispatch]
  )

  return (
    <Container title="Kernels">
      <FormGroup>
        {kernelIds.map(kernelId => (
          <FormControlLabel
            key={kernelId}
            control={
              <Checkbox
                checked={kernels[kernelId]}
                onChange={handleChange(kernelId)}
                value={kernelId}
              />
            }
            label={kernelNamesById[kernelId]}
          />
        ))}
      </FormGroup>
    </Container>
  )
}

export default Kernels
