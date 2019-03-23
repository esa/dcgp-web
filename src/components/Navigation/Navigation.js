import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppBar from '../AppBar'
import Toolbar from '../Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useMediaQuery } from '../../hooks'
import GitHub from '../../icons/GitHub'

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`

const IconLink = styled.a`
  width: 48px;
  height: 48px;
  padding: 12px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.title};

  svg {
    fill: currentColor;
  }
`

const Navigation = ({ handleMenuToggle }) => {
  const isWideEnough = useMediaQuery('(min-width: 960px)')

  return (
    <AppBar>
      <Toolbar>
        <div css="margin-left: -12px;margin-right: 24px;">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Title>
          {isWideEnough
            ? 'differentiable cartesian genetic programming'
            : 'dcgp'}
        </Title>
        <div css="flex-grow: 1;" />
        <IconLink href="https://github.com/mikeheddes/dcgp.js">
          <GitHub />
        </IconLink>
      </Toolbar>
    </AppBar>
  )
}

Navigation.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
}

export default Navigation
