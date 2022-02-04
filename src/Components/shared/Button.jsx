import React from 'react'
import PropTypes from 'prop-types';

function Button({ children, versionClass, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${versionClass}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    versionClass: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    versionClass: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button
