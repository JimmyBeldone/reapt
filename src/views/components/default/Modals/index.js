import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import {ModalConsumer} from '../../../../providers/ModalProvider'

const ModalRoot = () => (
    <ModalConsumer>
        {({content: Component, props, hideModal}) =>
            Component ? <Component {...props} onRequestClose={hideModal} /> : null
        }
    </ModalConsumer>
)

export default ModalRoot
