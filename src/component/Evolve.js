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
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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

const Evolve = ({ classes }) => {
  const [dataFunc, setDataFunc] = useState('linear')
  const [hasSum, setHasSum] = useState(true)
  const [hasDiff, setHasDiff] = useState(true)
  const [hasMul, setHasMul] = useState(true)
  const [hasDiv, setHasDiv] = useState(false)
  const [hasPDiv, setHasPDiv] = useState(true)
  const [hasSin, setHasSin] = useState(true)
  const [hasCos, setHasCos] = useState(true)
  const [hasLog, setHasLog] = useState(false)
  const [hasExp, setHasExp] = useState(false)
  const [rows, setRows] = useState(1)
  const [columns, setColumns] = useState(1)
  const [arity, setArity] = useState(2)
  const [levelsBack, setLevelsBack] = useState(1)
  const [algorithm, setAlgorithm] = useState('esl')

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
                  value="pdiv"
                />
              }
              label="Protected division"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasSin}
                  onChange={() => {
                    setHasSin(a => !a)
                  }}
                  value="sin"
                />
              }
              label="Sine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasCos}
                  onChange={() => {
                    setHasCos(a => !a)
                  }}
                  value="cos"
                />
              }
              label="Cosine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasLog}
                  onChange={() => {
                    setHasLog(a => !a)
                  }}
                  value="log"
                />
              }
              label="Logarithm"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hasExp}
                  onChange={() => {
                    setHasExp(a => !a)
                  }}
                  value="exp"
                />
              }
              label="Exponential"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Network</FormLabel>
          <FormGroup className={classes.group}>
            <TextField
              label="Rows"
              type="number"
              value={rows}
              onChange={e => {
                setRows(e.target.valueAsNumber)
              }}
              className={classes.textField}
              min={1}
            />
            <TextField
              label="Columns"
              type="number"
              value={columns}
              onChange={e => {
                setColumns(e.target.valueAsNumber)
              }}
              className={classes.textField}
              min={1}
            />
            <TextField
              label="Arity"
              type="number"
              value={arity}
              onChange={e => {
                setArity(e.target.valueAsNumber)
              }}
              className={classes.textField}
              min={2}
            />
            <TextField
              label="Levels back"
              type="number"
              value={levelsBack}
              onChange={e => {
                setLevelsBack(e.target.valueAsNumber)
              }}
              className={classes.textField}
              min={1}
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Algorithm</FormLabel>
          <RadioGroup
            aria-label="Algorithm"
            name="algorithm"
            value={algorithm}
            className={classes.group}
            onChange={event => {
              setAlgorithm(event.target.value)
            }}
          >
            <FormControlLabel
              value="esl"
              control={<Radio />}
              label="ES-(1+λ)"
            />
            <FormControlLabel
              value="alg2"
              control={<Radio />}
              label="Alg 2."
              disabled
            />
            <FormControlLabel
              value="alg3"
              control={<Radio />}
              label="Alg 3."
              disabled
            />
          </RadioGroup>
        </FormControl>
        <div>
          <Button color="secondary" variant="contained">
            Start
          </Button>
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
