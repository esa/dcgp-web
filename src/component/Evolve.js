import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

const styles = theme => ({
  group: {
    flexDirection: 'row',
  },
  inputBox: {
    padding: '30px',
    backgroundColor: theme.palette.grey['200'],
  },
})

const Evolve = ({ classes }) => {
  const [dataFunc, setDataFunc] = useState('linear')
  const [hasSum, setHasSum] = useState(true)
  const [hasDiff, setHasDiff] = useState(true)
  const [hasMul, setHasMul] = useState(true)
  const [hasDiv, setHasDiv] = useState(false)
  const [hasPDiv, setHasPDiv] = useState(true)

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
            />
            <FormControlLabel
              value="random"
              control={<Radio />}
              label="Random"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
      <h2>Parameters</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Paper elevation={0} className={classes.inputBox}>
        <div css="display: flex">
          <FormControl component="fieldset">
            <FormLabel component="legend">Kernel functions</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasSum}
                    onChange={() => {
                      setHasSum(a => !a)
                    }}
                    value="sum"
                  />
                }
                label="Addition"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasDiff}
                    onChange={() => {
                      setHasDiff(a => !a)
                    }}
                    value="diff"
                  />
                }
                label="Subtraction"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasMul}
                    onChange={() => {
                      setHasMul(a => !a)
                    }}
                    value="mul"
                  />
                }
                label="Multiplication"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasDiv}
                    onChange={() => {
                      setHasDiv(a => !a)
                    }}
                    value="div"
                  />
                }
                label="Division"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasPDiv}
                    onChange={() => {
                      setHasPDiv(a => !a)
                    }}
                    value="Protected division"
                  />
                }
                label="pdiv"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Paper>
      <h2>Evolution progress</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Paper elevation={0} className={classes.inputBox} />
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
