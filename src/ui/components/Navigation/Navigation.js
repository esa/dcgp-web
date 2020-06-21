import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { ThemeContext } from 'styled-components'
import { hiDPI } from 'polished'
import CircleButton from '../CircleButton'
import { useMediaQuery } from '../../../hooks'
import { isAboutOpenSelector } from '../../selectors'
import { toggleAbout } from '../../actions'
import Help from '../../../icons/Help'
import GitHub from '../../../icons/GitHub'
import { up } from 'styled-breakpoints'
import logoWhite from '../../../images/logo-white.png'
import logoBlack from '../../../images/logo-black.png'
import About from '../About'
import { Dataset } from '../../../dataset'
import { setInterFontSizeAndSpacing } from '../../../utils/font'

const CONTENT_WIDTH = 1180

const AppBar = styled.header`
  background-color: ${({ theme }) => theme.surface.regular};
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 30px;
  box-shadow: 0 12px 50px -8px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  ${hiDPI(2)} {
    border-width: 0.5px
  }
`

const Title = styled.h1`
  ${setInterFontSizeAndSpacing(20)};
  font-weight: 600;
  margin: 0;
  flex-grow: 1;
`


const Padding = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 64px;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;
  max-width: ${CONTENT_WIDTH + 40}px;
  margin-left: auto;
  margin-right: auto;

  ${up('sm')} {
    padding: 0 50px;
    max-width: ${CONTENT_WIDTH + 100}px;
  }

  ${up('md')} {
    padding: 0 130px;
    max-width: ${CONTENT_WIDTH + 260}px;
  }
`

const Width = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 4px 0;
`

const Image = styled.img`
  height: 48px;
  margin-bottom: -2px;
  margin-left: -10px;
  margin-right: 8px;

  ${up('md')} {
    margin-right: 15px;
  }
`

const Navigation = () => {
  const isWideEnough = useMediaQuery('(min-width: 960px)')
  const theme = useContext(ThemeContext)
  const isAboutOpen = useSelector(isAboutOpenSelector)
  const dispatch = useDispatch()

  const isDarkTheme = theme.id === 'NIGHT'

  return (
    <AppBar>
      <Padding>
        <Width>
          <Image src={isDarkTheme ? logoWhite : logoBlack} alt="logo" />
          <Title>
            {isWideEnough
              ? 'differentiable Cartesian Genetic Programming'
              : 'dCGP'}
          </Title>
          <CircleButton
            css="margin-right: 15px;"
            title="About dcgp"
            size={48}
            padding={12}
            variant="ghost"
            onClick={() => dispatch(toggleAbout())}
          >
            <Help variant={isAboutOpen ? 'default' : 'outline'} size={null} />
          </CircleButton>
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
        <About />
        <Dataset />
      </Padding>
    </AppBar>
  )
}

export default Navigation
