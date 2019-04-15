import React from 'react'
import styled from 'styled-components'
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
  cursor: pointer;
  padding-left: 20px;
  padding-right: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.surface.regular};
  }
`

const Grow = styled.span`
  flex-grow: 1;
`

const Menu = ({ isOpen, ...restProps }) => {
  return (
    <div {...restProps}>
      <List css="margin: 0;">
        <Row>Advanced mode</Row>
        <Divider size={1} css="margin: 8px 0;" />
        <Row>
          <Grow>Download expression</Grow>
          <Download size={20} />
        </Row>
        <Divider size={1} css="margin: 8px 0;" />
        <a
          css="text-decoration: none;"
          href="https://github.com/mikeheddes/dcgp-web"
        >
          <Row>
            <Grow>GitHub repository</Grow>
            <NewPage size={20} />
          </Row>
        </a>
        <a
          css="text-decoration: none;"
          href="https://github.com/mikeheddes/dcgp-web/issues/new"
        >
          <Row>
            <Grow>Report an issue</Grow>
            <NewPage size={20} />
          </Row>
        </a>
      </List>
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
