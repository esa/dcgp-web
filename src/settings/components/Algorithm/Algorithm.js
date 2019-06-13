import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAlgorithm, algorithmsById, changeParameter } from '../../actions'
import { algorithmSelector, constantsSelector } from '../../selectors'
import QuantityCounter from '../../../ui/components/QuantityCounter'
import Container from '../Container'
import SubHeader from '../SubHeader'
import Radio from '../../../icons/Radio'
import List, { Row } from '../List'
import { capitalize } from '../../../utils/string'

const algorithmIds = Object.keys(algorithmsById)

const Algorithm = () => {
  const algorithm = useSelector(algorithmSelector)
  const constants = useSelector(constantsSelector)
  const dispatch = useDispatch()

  const handleChange = id => () => dispatch(setAlgorithm(id))

  const parameters = algorithmsById[algorithm.id].parameters

  const handleSettingChange = id => newValue =>
    dispatch(changeParameter(id, newValue))

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
