import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import {ModalConsumer} from '../../../../../providers/ModalProvider'
import DefaultModal from '../DefaultModal'

const OpenModalBtn = () => (
    <ModalConsumer>
        {({showModal}) => (
            <button onClick={() => showModal(DefaultModal, {className: 'test'})}>Open Modal</button>
        )}
    </ModalConsumer>
)

export default OpenModalBtn
