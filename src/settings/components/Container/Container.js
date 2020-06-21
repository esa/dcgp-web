import React from 'react'
import PropTypes from 'prop-types'
import GridContainer from '../../../ui/components/GridContainer'
import SubHeader from '../../../ui/components/SubHeader'

const SettingsContainer = ({ children, title }) => (
  <GridContainer>
    <SubHeader>{title}</SubHeader>
    {children}
  </GridContainer>
)

SettingsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default SettingsContainer
