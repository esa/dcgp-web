import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { setNetworkSetting, networkSettingsById } from '../../actions'
import { networkSelector } from '../../selectors'
import QuantityCounter from '../../../components/QuantityCounter'
import { capitalize } from '../../../utils/string'
import Container from '../Container'
import List, { Row } from '../List'
import Constants from '../Constants'

const networkSettingIds = Object.keys(networkSettingsById)

const calcMaxValue = (settingId, values) => {
  if (settingId === 'levelsBack') {
    // columns + 1 because the levelsBack may also reach the inputs
    return Math.min(values.columns + 1, networkSettingsById[settingId].max)
  }

  return networkSettingsById[settingId].max
}

const mapStateToProps = {
  network: networkSelector,
}

const Network = () => {
  const { dispatch, network } = useRedux(mapStateToProps)

  const handleChange = useCallback(
    settingId => newValue => dispatch(setNetworkSetting(settingId, newValue)),
    [dispatch]
  )

  return (
    <Container title="Network">
      <List>
        {networkSettingIds.map(settingId => (
          <Row key={settingId}>
            {capitalize(networkSettingsById[settingId].label)}
            <div css="flex-grow: 1;" />
            <QuantityCounter
              value={network[settingId]}
              onChange={handleChange(settingId)}
              min={networkSettingsById[settingId].min}
              max={calcMaxValue(settingId, network)}
            />
          </Row>
        ))}
      </List>
      <Constants />
    </Container>
  )
}

export default Network
