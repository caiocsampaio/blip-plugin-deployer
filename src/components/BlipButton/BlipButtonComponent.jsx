import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlipButtonComponent = ({
  buttonClass,
  label,
  icon,
  onClick
}) => {
  return <span className="BlipButton relative">
    <button className={`bp-btn ${buttonClass}`} onClick={onClick}>
      {
        icon &&
          <FontAwesomeIcon icon={icon} />
      }
      {label}
    </button>
  </span>
}

BlipButtonComponent.propTypes = {
  buttonClass: PropTypes.string,
  label: PropTypes.any,
  onClick: PropTypes.func.isRequired,
}

export { BlipButtonComponent }
