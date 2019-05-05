import React from 'react'
import PropTypes from 'prop-types'
import Base from '../Base'

const Radio = props => (
  <Base {...props}>
    {props.checked ? (
      <>
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </>
    ) : (
      <>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </>
    )}
  </Base>
)

Radio.propTypes = {
  checked: PropTypes.bool,
}

export default Radio