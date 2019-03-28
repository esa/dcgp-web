import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { NIGHT, DAY } from './colors'
import breakpoints from './breakpoints'
import { useMediaQuery } from '../hooks'

const Theme = ({ children }) => {
  const wantsLightTheme = useMediaQuery('(prefers-color-scheme: light)')

  const theme = {
    ...(wantsLightTheme ? DAY : NIGHT),
    breakpoints,
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
