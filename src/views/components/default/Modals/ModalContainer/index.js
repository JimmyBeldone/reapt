import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import cn from 'classnames'
import { FormattedMessage } from 'react-intl'

import './ModalContainer'

Modal.setAppElement('#app')

const ModalContainer = ({
    onRequestClose,
    className,
    title,
    withIntl,
    children,
    overlayClassName
}) => (<Modal isOpen="isOpen" contentLabel="App Modal" overlayClassName={overlayClassName} className={cn('modal-container', className)} style={{
        overlay: {},
        content: {}
    }} onRequestClose={onRequestClose} shouldCloseOnOverlayClick={true} shouldReturnFocusAfterClose={false}>
    <Fragment>
        <div className="modal-header">
            <div className="modal-title">
                {
                    withIntl
                        ? (<FormattedMessage id={title}/>)
                        : title
                }
            </div>
            <div className="close-modal" onClick={onRequestClose}>
                <div className="icon icon-Circle-Cancel"/>
            </div>
        </div>
        <div className="modal-content">
            {children}
        </div>
    </Fragment>
</Modal>)

ModalContainer.propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    withIntl: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    overlayClassName: PropTypes.string.isRequired
}

ModalContainer.defaultProps = {
    className: '',
    withIntl: true,
    overlayClassName: 'ReactModalPortalgradient'
}

export default ModalContainer
