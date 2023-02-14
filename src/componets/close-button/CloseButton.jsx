import React from 'react'
import "./close-button.scss"
function CloseButton(props) {
  return (
    <button className="close-btn" onClick={() => props.close()}>
        
      </button>
  )
}

export default CloseButton