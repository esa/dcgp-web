import React from 'react'
import {
  setNetworkSetting,
  toggleKernel,
  setAlgorithm,
  kernelNamesById,
  networkSettingsById,
  startEvolution,
  pauseEvolution,
  resetEvolution,
  ONE_PLUS_LAMBDA,
} from '../actions'
import { useDispatch } from '../../hooks'
import {
  useParameters,
  useCurrentStep,
  useLoss,
  useEvolutionState,
} from '../hooks'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const kernelIds = Object.keys(kernelNamesById)
const networkSettingIds = Object.keys(networkSettingsById)

const styles = theme => ({
  group: {
    flexDirection: 'row',
  },
  inputBox: {
    padding: '30px',
    backgroundColor: theme.palette.grey['200'],
  },
  textField: {
    marginRight: theme.spacing.unit,
    marginTop: 19,
  },
})

const Parameters = ({ classes }) => {
  const dispatch = useDispatch()
  const parameters = useParameters()
  const currentStep = useCurrentStep()
  const loss = useLoss()
  const evolutionState = useEvolutionState()

  let buttonLabel
  switch (evolutionState) {
    case 'EVOLVING':
      buttonLabel = 'pause'
      break
    case 'EMPTY':
      buttonLabel = 'start'
      break
    case 'PAUSING':
      buttonLabel = 'resume'
      break
    default:
      break
  }

  let buttonAction
  switch (evolutionState) {
    case 'EVOLVING':
      buttonAction = pauseEvolution
      break
    case 'EMPTY':
    case 'PAUSING':
      buttonAction = startEvolution
      break
    default:
      break
  }

  return (
    <>
      <h2>Parameters</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Paper elevation={0} className={classes.inputBox}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Kernel functions</FormLabel>
          <FormGroup className={classes.group}>
            {kernelIds.map(kernelId => (
              <FormControlLabel
                key={kernelId}
                control={
                  <Checkbox
                    checked={parameters.kernels[kernelId]}
                    onChange={() => dispatch(toggleKernel(kernelId))}
                    value={kernelId}
                  />
                }
                label={kernelNamesById[kernelId]}
              />
            ))}
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Network</FormLabel>
          <FormGroup className={classes.group}>
            {networkSettingIds.map(settingId => (
              <TextField
                key={settingId}
                label={networkSettingsById[settingId]}
                type="number"
                value={parameters.network[settingId]}
                onChange={e =>
                  dispatch(setNetworkSetting(settingId, e.target.valueAsNumber))
                }
                className={classes.textField}
                min={1}
              />
            ))}
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Algorithm</FormLabel>
          <RadioGroup
            aria-label="Algorithm"
            name="algorithm"
            value={parameters.algorithm.id}
            className={classes.group}
            onChange={e => dispatch(setAlgorithm(e.target.value))}
          >
            <FormControlLabel
              value={ONE_PLUS_LAMBDA}
              control={<Radio />}
              label="one plus lambda"
            />
            <FormControlLabel
              value="null"
              control={<Radio />}
              label="TBA"
              disabled
            />
            <FormControlLabel
              value="null"
              control={<Radio />}
              label="TBA"
              disabled
            />
          </RadioGroup>
        </FormControl>
        <div>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => dispatch(resetEvolution())}
          >
            reset
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => dispatch(buttonAction())}
          >
            {buttonLabel}
          </Button>
        </div>
        <p>
          Step: {currentStep}, loss: {loss}
        </p>
      </Paper>
    </>
  )
}

export default withStyles(styles)(Parameters)
