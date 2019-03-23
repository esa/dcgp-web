import React from 'react'
import {
  setNetworkSetting,
  toggleKernel,
  setAlgorithm,
  kernelNamesById,
  networkSettingsById,
  ONE_PLUS_LAMBDA,
} from '../../actions'
import { useDispatch } from '../../../hooks'
import { useSettings } from '../../hooks'
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

const Settings = ({ classes }) => {
  const dispatch = useDispatch()
  const settings = useSettings()

  return (
    <>
      <h2>Settings</h2>
      <Paper elevation={0} className={classes.inputBox}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Kernel functions</FormLabel>
          <FormGroup className={classes.group}>
            {kernelIds.map(kernelId => (
              <FormControlLabel
                key={kernelId}
                control={
                  <Checkbox
                    checked={settings.kernels[kernelId]}
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
                value={settings.network[settingId]}
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
            value={settings.algorithm.id}
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
      </Paper>
    </>
  )
}

export default withStyles(styles)(Settings)
