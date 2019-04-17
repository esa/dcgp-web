import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { constantsSelector } from '../../selectors'
import { isEvolvingSelector } from '../../../evolution/selectors'
import {
  addConstant,
  removeConstant,
  changeConstant,
  resetConstants,
  MAX_CONSTANTS,
} from '../../actions'
import List, { Row } from '../List'
import Remove from '../../../icons/Remove'
import Plus from '../../../icons/Plus'
import Reset from '../../../icons/Reset'
import CircleButton from '../../../components/CircleButton'
import { SubHeader, Input } from './style'

const mapStateToProps = {
  constants: constantsSelector,
  isEvolving: isEvolvingSelector,
}

const Constants = () => {
  const { constants, isEvolving, dispatch } = useRedux(mapStateToProps)
  const handleAddConstant = useCallback(() => dispatch(addConstant()))
  const handleRemoveConstant = useCallback(i => () =>
    dispatch(removeConstant(i))
  )
  const handleResetConstants = useCallback(() => dispatch(resetConstants()))

  // Allows typing negative numbers
  const handleChangeConstant = useCallback(i => e => {
    const inputValue = e.target.value

    if (inputValue === '-' || inputValue === '') {
      dispatch(changeConstant(i, inputValue))
      return
    }

    if (inputValue.endsWith('.') && !isNaN(parseFloat(inputValue + '0'))) {
      dispatch(changeConstant(i, inputValue))
      return
    }

    const parsedValue = parseFloat(inputValue)

    if (isNaN(parsedValue)) {
      return
    }

    dispatch(changeConstant(i, parsedValue))
  })

  return (
    <>
      <SubHeader>
        <span css="flex-grow: 1;">Constants</span>
        <CircleButton
          css="margin-right: 4px;"
          title="Reset constants"
          variant="ghost"
          size={24}
          padding={4}
          onClick={handleResetConstants}
          disabled={constants.length === 0 || isEvolving}
        >
          <Reset size={null} />
        </CircleButton>
        <CircleButton
          title="Add constant"
          variant="ghost"
          size={24}
          padding={0}
          onClick={handleAddConstant}
          disabled={constants.length >= MAX_CONSTANTS}
        >
          <Plus size={null} />
        </CircleButton>
      </SubHeader>
      <List css="margin-top: 8px; margin-bottom: 8px;">
        {constants.map((constant, i) => (
          <Row key={i}>
            C{i + 1}
            <Input
              disabled={isEvolving}
              value={constant}
              onChange={handleChangeConstant(i)}
              tabIndex={i + 1}
            />
            <CircleButton
              title="Remove"
              variant="ghost"
              size={24}
              padding={0}
              onClick={handleRemoveConstant(i)}
            >
              <Remove />
            </CircleButton>
          </Row>
        ))}
      </List>
    </>
  )
}

export default Constants
