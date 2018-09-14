import React from 'react'
import PropTypes from 'prop-types'

import './OpenModalBtn'
import { ModalConsumer } from '../../../../../providers/ModalProvider'

const OpenModalBtn = (props) => (<ModalConsumer>
    {
        ({ showModal }) => (<div className="open-modal-btn" onClick={() => showModal(props.modal, { className: 'test' })}>
            {props.children}
        </div>)
    }
</ModalConsumer>)

OpenModalBtn.propTypes = {
    // className: PropTypes.string.isRequired,
    modal: PropTypes.func,
    children: PropTypes.node
}

OpenModalBtn.defaultProps = {
    // className: '',
    // modal: DefaultModal,
}

export default OpenModalBtn
