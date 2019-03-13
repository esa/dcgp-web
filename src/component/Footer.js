import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const StyledPaper = withStyles({
  root: {
    backgroundColor: '#F2F2F2',
    height: '64px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})(Paper)

const Footer = () => (
  <StyledPaper component="footer" square elevation={0}>
    <Typography variant="caption" component="p" align="center">
      Copyright © {new Date().getFullYear()} European Space Agency. All rights
      reserved.
    </Typography>
  </StyledPaper>
)

export default Footer
