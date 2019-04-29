import React, { useContext, useRef } from 'react'
import copy from 'copy-to-clipboard'
import 'katex/dist/katex.min.css'
import { BlockMath } from 'react-katex'
import { useRedux } from '../../../hooks'
import Divider from '../../../ui/components/Divider'
import { equationsSelector } from '../../../dataset/selectors'
import { CopyButton, GridContainer } from './style'
import SubHeader from '../../../ui/components/SubHeader'

const mapStateToProps = {
  equations: equationsSelector,
  // predictionEquations: predictionEquationsSelector,
}

const Equations = () => {
  const copyButton = useRef(null)

  const { equations } = useRedux(mapStateToProps)

  // const handleCopy = () => {
  //   if (predictionEquations.length) {
  //     copy(predictionEquations[0])
  //   }
  // }

  return (
    <GridContainer>
      <SubHeader>Equations</SubHeader>
      <Divider css="margin-bottom: 15px" />
      {equations && (
        <>
          <div css="display: flex; margin-bottom: 15px;">
            <span css="flex-grow: 1;">Label equations:</span>
          </div>
          <div css="overflow-x: auto; overflow-y: hidden;">
            <BlockMath>{equations[0]}</BlockMath>
          </div>
        </>
      )}
      {/* {predictionEquations.length > 0 && (
        <>
          <div css="display: flex; margin: 30px 0 15px;">
            <span css="flex-grow: 1;">Prediction equation:</span>
            <CopyButton ref={copyButton} onClick={handleCopy}>
              Copy LaTeX
            </CopyButton>
          </div>
          <div css="overflow-x: auto; overflow-y: hidden;">
            <BlockMath>{predictionEquations[0]}</BlockMath>
          </div>
        </>
      )} */}
    </GridContainer>
  )
}

export default Equations
