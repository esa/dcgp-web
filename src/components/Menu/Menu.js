import { dependencies } from '../../../package.json'
import React from 'react'
import styled, { css } from 'styled-components'
import Divider from '../Divider'
import Download from '../../icons/Download'
import NewPage from '../../icons/NewPage'

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.text.regular};
  min-height: 36px;
  background-color: transparent;
  transition: background-color 100ms ease-out;
  padding-left: 20px;
  padding-right: 15px;

  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.surface.regular};
      }
    `}
`

const Grow = styled.span`
  flex-grow: 1;
`

const Code = styled.code`
  font-size: 0.93em;
`

const Menu = ({ isOpen, ...restProps }) => {
  return (
    <div {...restProps}>
      <List css="margin: 0;">
        <Row>
          <Code>dcpg.js {dependencies.dcgp.replace('^', '')}</Code>
        </Row>
        <Divider variant="content" size={1} css="margin: 8px 0px 8px 20px;" />
        <Row>Advanced mode</Row>
        <Row>
          <Grow>Download expression</Grow>
          <Download size={20} />
        </Row>
        <a
          css="text-decoration: none;"
          href="https://github.com/mikeheddes/dcgp-web"
        >
          <Row clickable>
            <Grow>GitHub repository</Grow>
            <NewPage size={20} />
          </Row>
        </a>
        <a
          css="text-decoration: none;"
          href="https://github.com/mikeheddes/dcgp-web/issues/new"
        >
          <Row clickable>
            <Grow>Report an issue</Grow>
            <NewPage size={20} />
          </Row>
        </a>
      </List>
      <div css="margin-top: auto;" />
    </div>
  )
}

export default styled(Menu)`
  width: 260px;
  z-index: 1;
  border-right: 1px solid ${({ theme }) => theme.border.content};
  background-color: ${({ theme }) => theme.background};
  transition: transform 300ms ease-out;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : -261)}px);
  padding: 8px 0px 20px;
  box-sizing: border-box;
  font-size: 14px;
`
