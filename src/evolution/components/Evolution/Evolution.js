import React from 'react'
import Controls from '../Controls'
import GridContainer from '../../../ui/components/GridContainer'
import Divider from '../../../ui/components/Divider'
import Chart from '../Chart'
import Information from '../Information'

const Evolve = () => {
  return (
    <GridContainer>
      <Controls />
      <Divider />
      <Information />
      <Chart />
    </GridContainer>
  )
}

export default Evolve
