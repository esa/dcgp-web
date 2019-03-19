import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Paper from '@material-ui/core/Paper'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import { useSteps } from '../hooks'
import Parameters from './Parameters'

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

// TODO: move to utils
const significant2 = number => number.toPrecision(2)

const Evolve = ({ classes }) => {
  const [dataFunc, setDataFunc] = useState('linear')
  const steps = useSteps()

  return (
    <>
      <h2>Select data</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Paper elevation={0} className={classes.inputBox}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Function</FormLabel>
          <RadioGroup
            aria-label="Function"
            name="function"
            value={dataFunc}
            className={classes.group}
            onChange={event => {
              setDataFunc(event.target.value)
            }}
          >
            <FormControlLabel
              value="linear"
              control={<Radio />}
              label="Linear"
            />
            <FormControlLabel
              value="parabolic"
              control={<Radio />}
              label="Parabolic"
              disabled
            />
            <FormControlLabel
              value="random"
              control={<Radio />}
              label="Random"
              disabled
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Parameters />
      <h2>Evolution progress</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Paper elevation={0} className={classes.inputBox}>
        <ResponsiveContainer height={300}>
          <LineChart
            width={730}
            height={250}
            data={steps}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="step" />
            <YAxis
              scale="log"
              domain={['auto', 'auto']}
              tickFormatter={significant2}
            />
            <Line type="stepAfter" dataKey="loss" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
      <h2>Best chromosomes</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Paper elevation={0} className={classes.inputBox} />
    </>
  )
}

export default withStyles(styles)(Evolve)
