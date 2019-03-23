import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'
import { useDispatch } from '../../../hooks'
import {
  useSteps,
  useCurrentStep,
  useLoss,
  useEvolutionState,
} from '../../hooks'
import { startEvolution, pauseEvolution, resetEvolution } from '../../actions'

const styles = theme => ({
  inputBox: {
    padding: '30px',
    backgroundColor: theme.palette.grey['200'],
  },
})

// TODO: move to utils
const significant2 = number => number.toPrecision(2)

const Evolve = ({ classes }) => {
  const dispatch = useDispatch()
  const steps = useSteps()
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
      <h2>Evolution progress</h2>
      <Paper elevation={0} className={classes.inputBox}>
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
              domain={[dataMin => dataMin * 0.9, 'auto']}
              tickFormatter={significant2}
            />
            <Line type="stepAfter" dataKey="loss" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </>
  )
}

export default withStyles(styles)(Evolve)
