import styled from 'styled-components'
import { transparentize as fade } from 'polished'

export const Wrapper = styled.div`
  grid-column: full;
  transition: max-height 500ms ease-in-out, min-height 500ms ease-in-out;
  max-height: ${({ height, isOpen }) => (isOpen ? height : 0)}px;
  min-height: ${({ height, isOpen }) => (isOpen ? height : 0)}px;
  overflow: hidden;

  h1 {
    margin-top: 0;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.title};
  }

  h2 {
    font-size: 1.4rem;
    margin: 1.5em 0 0.8em;
    color: ${({ theme }) => theme.title};
  }

  summary {
    font-size: 1.4rem;
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
    font-size: 1.05rem;
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
