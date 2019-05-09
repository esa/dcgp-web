import React from 'react'
import PropTypes from 'prop-types'
import Base from '../Base'

const Fold = props => {
  let path =
    'M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z'

  if (props.open) {
    path =
      'M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z'
  }

  return (
    <Base {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d={path} />
    </Base>
  )
}

Fold.propTypes = {
  open: PropTypes.bool,
}

Fold.defaultProps = {
  open: false,
}

export default Fold
