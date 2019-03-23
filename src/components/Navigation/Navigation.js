import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '../AppBar'
import Toolbar from '../Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useMediaQuery } from '../../hooks'
import DcgpLogo from '../DcgpLogo'
import GitHubIcon from '../../icons/GitHub'

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
        <DcgpLogo css="height: 1.2em;" aria-label="dcgp" full={isWideEnough} />
        <div css="flex-grow: 1;" />
        <IconButton
          color="inherit"
          href="https://github.com/mikeheddes/dcgp.js"
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Navigation.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
}

export default Navigation
