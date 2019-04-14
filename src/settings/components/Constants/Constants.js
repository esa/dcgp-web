import React, { useCallback } from 'react'
import { useRedux } from '../../../hooks'
import { constantsSelector } from '../../selectors'
import { isEvolvingSelector } from '../../../evolution/selectors'
import {
  addConstant,
  removeConstant,
  changeConstant,
  MAX_CONSTANTS,
} from '../../actions'
import List, { Row } from '../List'
import Remove from '../../../icons/Remove'
import Plus from '../../../icons/Plus'
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
  const handleChangeConstant = useCallback(i => e =>
    dispatch(changeConstant(i, e.target.valueAsNumber))
  )

  return (
    <>
      <SubHeader>Constants</SubHeader>
      <List css="margin-top: 8px; margin-bottom: 8px;">
        {constants.map((constant, i) => (
          <Row key={i}>
            C{i + 1}
            <Input
              disabled={isEvolving}
              value={constant}
              type="number"
              onChange={handleChangeConstant(i)}
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
      <CircleButton
        css="margin-left: -2px;"
        title="Add constant"
        variant="ghost"
        size={24}
        padding={0}
        onClick={handleAddConstant}
        disabled={constants.length >= MAX_CONSTANTS}
      >
        <Plus />
      </CircleButton>
    </>
  )
}

export default Constants
