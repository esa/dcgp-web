import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { setNetworkSetting, networkSettingsById } from '../../actions'
import { networkSelector } from '../../selectors'
import QuantityCounter from '../../../components/QuantityCounter'
import { capitalize } from '../../../utils/string'
import Container from '../Container'
import List, { Row } from '../List'

const networkSettingIds = Object.keys(networkSettingsById)

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
              max={networkSettingsById[settingId].max}
            />
          </Row>
        ))}
      </List>
    </Container>
  )
}

export default Network
