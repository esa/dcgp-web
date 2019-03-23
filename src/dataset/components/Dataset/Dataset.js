import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const styles = () => ({
  group: {
    flexDirection: 'row',
  },
})

const Dataset = ({ classes }) => {
  const [dataFunc, setDataFunc] = useState('linear')

  return (
    <div css="grid-column-start: span 4;">
      <h2>Select data</h2>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Function"
          name="function"
          value={dataFunc}
          className={classes.group}
          onChange={event => {
            setDataFunc(event.target.value)
          }}
        >
          <FormControlLabel value="linear" control={<Radio />} label="Linear" />
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
    </div>
  )
}

export default withStyles(styles)(Dataset)
