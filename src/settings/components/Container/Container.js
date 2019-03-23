import React from 'react'
import PropTypes from 'prop-types'
import GridContainer from '../../../components/GridContainer'
import Divider from '../../../components/Divider'
import SubHeader from '../../../components/SubHeader'

const SettingsContainer = ({ children, title }) => (
  <GridContainer>
    <SubHeader>{title}</SubHeader>
    <Divider css="margin-bottom: 15px" />
    {children}
  </GridContainer>
)

SettingsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default SettingsContainer
