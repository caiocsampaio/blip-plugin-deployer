import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const BlipModalComponent = ({
    id,
  }) => {
    return <div>
    <button id={id}>Open modal</button>
    <div ref={useRef(id)}>
      <h1>Hello! I'm some lost modal!</h1>
    </div>
  </div>
  }
  
  BlipModalComponent.propTypes = {
    id: PropTypes.string.isRequired,
  }
  
  export { BlipModalComponent }