import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { setAlgorithm, algorithmsById, changeParameter } from '../../actions'
import { algorithmSelector, constantsSelector } from '../../selectors'
import QuantityCounter from '../../../ui/components/QuantityCounter'
import Container from '../Container'
import SubHeader from '../SubHeader'
import Radio from '../../../icons/Radio'
import List, { Row } from '../List'
import { capitalize } from '../../../utils/string'

const algorithmIds = Object.keys(algorithmsById)

const mapStateToProps = {
  algorithm: algorithmSelector,
  constants: constantsSelector,
}

const Algorithm = () => {
  const { dispatch, algorithm, constants } = useRedux(mapStateToProps)

  const handleChange = useCallback(id => () => dispatch(setAlgorithm(id)), [
    dispatch,
  ])

  const parameters = algorithmsById[algorithm.id].parameters

  const handleSettingChange = useCallback(
    id => newValue => dispatch(changeParameter(id, newValue)),
    [dispatch]
  )

  return (
    <Container title="Algorithm">
      <List>
        {algorithmIds.map(algorithmId => {
          const isDisabled =
            algorithmId === 'gradientDescent' && constants.length === 0
          return (
            <Row
              css="cursor: pointer;"
              key={algorithmId}
              disabled={isDisabled}
              onClick={handleChange(algorithmId)}
            >
              <Radio
                css="margin-right: 8px;"
                checked={algorithm.id === algorithmId}
              />
              {capitalize(algorithmsById[algorithmId].label)}
            </Row>
          )
        })}
      </List>
      {parameters && (
        <>
          <SubHeader>Parameters</SubHeader>
          <List>
            {Object.keys(parameters).map(parameterId => (
              <Row key={parameterId}>
                {capitalize(parameters[parameterId].label)}
                <div css="flex-grow: 1;" />
                <QuantityCounter
                  value={algorithm.byId[algorithm.id][parameterId]}
                  onChange={handleSettingChange(parameterId)}
                  min={parameters[parameterId].min}
                  max={parameters[parameterId].max}
                />
              </Row>
            ))}
          </List>
        </>
      )}
    </Container>
  )
}

export default Algorithm
