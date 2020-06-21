import styled from 'styled-components'
import { transparentize as fade } from 'polished'

import {setInterFontSizeAndSpacing} from '../../../utils/font'

export const Wrapper = styled.div`
  grid-column: full;
  margin-top: 30px;
  transition: max-height 500ms ease-in-out, min-height 500ms ease-in-out;
  max-height: ${({ height, isOpen }) => (isOpen ? height : 0)}px;
  min-height: ${({ height, isOpen }) => (isOpen ? height : 0)}px;
  overflow: hidden;

  h1 {
    margin-top: 0;
    ${setInterFontSizeAndSpacing(28)};
    color: ${({ theme }) => theme.title};
  }

  h2 {
    ${setInterFontSizeAndSpacing(24)};
    margin: 1.5em 0 0.8em;
    color: ${({ theme }) => theme.title};
  }

  summary {
    ${setInterFontSizeAndSpacing(24)};
    outline: none;
    cursor: pointer;
    margin: 1.5em 0 0.8em;

    & > h2 {
      display: inline-block;
      margin: 0;
      margin-left: 8px;
    }
  }

  p,
  ul {
    ${setInterFontSizeAndSpacing(17)};
    line-height: 1.6;
    color: ${({ theme }) => theme.text.regular};
  }

  a {
    text-decoration: none;
    font-weight: 500;
    transition: border-color 100ms ease-out;
    color: ${({ theme }) => theme.red};
    border-bottom: 1px dotted ${({ theme }) => fade(0.5, theme.red)};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.red};
    }
  }
`
