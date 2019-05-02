import React from 'react'
import { useRedux } from '../../../hooks'
import { constantsSelector } from '../../selectors'
import { isEvolvingSelector } from '../../../evolution/selectors'
import {
  requestAddConstant,
  removeConstant,
  changeConstant,
  setConstants,
  requestResetConstants,
  MAX_CONSTANTS,
} from '../../actions'
import List, { Row } from '../List'
import Remove from '../../../icons/Remove'
import Plus from '../../../icons/Plus'
import Reset from '../../../icons/Reset'
import CircleButton from '../../../ui/components/CircleButton'
import TextInput from '../../../ui/components/TextInput'
import SubHeader from '../SubHeader'

// Allows typing negative numbers
const makeHandleChangeConstant = dispatch => i => e => {
  const inputValue = e.target.value

  if (inputValue === '-' || inputValue === '') {
    dispatch(changeConstant(i, inputValue))
    return
  }

  if (inputValue.endsWith('.') && !isNaN(parseFloat(inputValue + '0'))) {
    dispatch(changeConstant(i, inputValue))
    return
  }

  if (inputValue.endsWith('0') && !isNaN(parseFloat(inputValue))) {
    dispatch(changeConstant(i, inputValue))
    return
  }

  const parsedValue = parseFloat(inputValue)

  if (isNaN(parsedValue)) {
    return
  }

  dispatch(changeConstant(i, parsedValue))
}

// Allows typing negative numbers
const makeHandleKeyDownConstant = (dispatch, constants) => i => e => {
  let currentValue = constants[i]

  if (currentValue === '-') {
    currentValue = 0
  }

  if (typeof currentValue === 'string') {
    currentValue = parseFloat(currentValue)
  }

  currentValue = isNaN(currentValue) ? 0 : currentValue

  // ArrowUp
  if (e.keyCode === 38) {
    dispatch(changeConstant(i, currentValue + 1))
  }

  // ArrowDown
  if (e.keyCode === 40) {
    dispatch(changeConstant(i, currentValue - 1))
  }
}

const makeHandleBlurConstant = (dispatch, constants) => i => e => {
  dispatch(
    setConstants(
      constants.map(c => {
        const value = parseFloat(c)
        return isNaN(value) ? 0 : value
      })
    )
  )
}

const mapStateToProps = {
  constants: constantsSelector,
  isEvolving: isEvolvingSelector,
}

const Constants = () => {
  const { constants, isEvolving, dispatch } = useRedux(mapStateToProps)

  const handleAddConstant = () => dispatch(requestAddConstant())
  const handleRemoveConstant = i => () => dispatch(removeConstant(i))
  const handleResetConstants = () => dispatch(requestResetConstants())

  const handleChangeConstant = makeHandleChangeConstant(dispatch)
  const handleKeyDownConstant = makeHandleKeyDownConstant(dispatch, constants)
  const handleBlurConstant = makeHandleBlurConstant(dispatch, constants)

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
            <TextInput
              css="margin: 0 15px;"
              disabled={isEvolving}
              value={constant}
              onChange={handleChangeConstant(i)}
              onBlur={handleBlurConstant(i)}
              onKeyDown={handleKeyDownConstant(i)}
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
