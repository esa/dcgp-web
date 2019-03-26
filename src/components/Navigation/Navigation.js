import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppBar from '../AppBar'
import CircleButton from '../CircleButton'
// import Toolbar from '../Toolbar'
import { useMediaQuery } from '../../hooks'
import GitHub from '../../icons/GitHub'
import Menu from '../../icons/Menu'
import { up } from 'styled-breakpoints'

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`

const Padding = styled.div`
  display: flex;
  align-items: center;
  min-height: 64px;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;

  ${up('sm')} {
    padding: 0 50px;
  }

  ${up('md')} {
    padding: 0 130px;
  }
`

const Width = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`

const Navigation = ({ handleMenuToggle }) => {
  const isWideEnough = useMediaQuery('(min-width: 960px)')

  return (
    <AppBar>
      <Padding>
        <Width>
          <CircleButton
            onClick={handleMenuToggle}
            title="Menu"
            size={48}
            padding={12}
            variant="ghost"
            css="margin-left: -12px;"
          >
            <Menu size={null} />
          </CircleButton>
          <Title css="flex-grow: 1; margin-left: 30px;">
            {isWideEnough
              ? 'differentiable cartesian genetic programming'
              : 'dcgp'}
          </Title>
          <CircleButton
            as="a"
            title="GitHub"
            size={48}
            padding={12}
            variant="ghost"
            href="https://github.com/mikeheddes/dcgp.js"
          >
            <GitHub size={null} />
          </CircleButton>
        </Width>
      </Padding>
    </AppBar>
  )
}

Navigation.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
}

export default Navigation
