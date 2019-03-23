import React, { useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import { useRedux } from '../../../hooks'
import { setNetworkSetting, networkSettingsById } from '../../actions'
import { networkSelector } from '../../selectors'
import Container from '../Container'

const networkSettingIds = Object.keys(networkSettingsById)

const Network = () => {
  const { dispatch, getState } = useRedux()
  const state = getState()
  const network = networkSelector(state)

  const handleChange = useCallback(
    settingId => event =>
      dispatch(setNetworkSetting(settingId, event.target.valueAsNumber)),
    [dispatch]
  )

  return (
    <Container title="Network">
      <FormGroup>
        {networkSettingIds.map(settingId => (
          <TextField
            key={settingId}
            label={networkSettingsById[settingId]}
            type="number"
            value={network[settingId]}
            onChange={handleChange(settingId)}
            min={1}
          />
        ))}
      </FormGroup>
    </Container>
  )
}

export default Network
