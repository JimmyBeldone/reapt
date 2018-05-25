
import React from 'react'

const OverlayTemplate = (props) => (
    <div className="overlay">
        {props.children}
        <span className={props.closeClassName} onClick={props.onClose}>{props.closeIcon}</span>
    </div>
)

export default OverlayTemplate
