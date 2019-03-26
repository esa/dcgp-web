import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { setNetworkSetting, networkSettingsById } from '../../actions'
import { networkSelector } from '../../selectors'
import QuantityCounter from '../../../components/QuantityCounter'
import { capitalize } from '../../../utils/string'
import Container from '../Container'
import List, { Row } from '../List'

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
      <List>
        {networkSettingIds.map(settingId => (
          <Row key={settingId}>
            {capitalize(networkSettingsById[settingId])}
            <div css="flex-grow: 1;" />
            <QuantityCounter
              value={network[settingId]}
              onChange={handleChange(settingId)}
              min={1}
            />
          </Row>
        ))}
      </List>
    </Container>
  )
}

export default Network
