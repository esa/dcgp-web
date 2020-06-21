import React from 'react'
import 'katex/dist/katex.min.css'
import { BlockMath } from 'react-katex'
import styled from 'styled-components'
import { up } from 'styled-breakpoints'

import { setInterFontSizeAndSpacing } from '../../../utils/font'
import unstyledGridContainer from '../../../ui/components/GridContainer'

export const GridContainer = styled(unstyledGridContainer)`
  grid-column-end: span 1;

  ${up('sm')} {
    grid-column-end: span 2;
  }
`

export const Bold = styled.h3`
  ${setInterFontSizeAndSpacing(18)};
  font-weight: 600;
  margin-right: 0.25em;
  flex-grow: 1;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EquationBlock = styled(({ className, equation, children }) => (
  <div className={className}>
    <BlockMath>{children || equation}</BlockMath>
  </div>
))`
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 20px;
`
