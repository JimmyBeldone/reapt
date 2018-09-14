import React from 'react'

import './Modal.styl'
import { ModalConsumer } from '../../../../providers/ModalProvider'

const ModalRoot = () => (<ModalConsumer>
    {
        ({ content: Component, props, hideModal }) => Component
            ? <Component {...props} onRequestClose={hideModal}/>
            : null
    }
</ModalConsumer>)

export default ModalRoot
