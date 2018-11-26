import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import cn from "classnames";
import { Trans } from "react-i18next";

import "./ModalContainer.styl";

Modal.setAppElement("#app");

const ModalContainer = ({
    onRequestClose,
    className,
    title,
    withIntl,
    children,
    overlayClassName,
    portalClassName
}) => (
    <Modal
        isOpen="isOpen"
        contentLabel="App Modal"
        overlayClassName={overlayClassName}
        portalClassName={portalClassName}
        className={cn("modal-container", className)}
        style={{
            overlay: {},
            content: {}
        }}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        shouldReturnFocusAfterClose={false}
    >
        <Fragment>
            <div className="modal-header">
                <div className="modal-title">
                    {withIntl ? <Trans i18nKey={title} /> : title}
                </div>
                <button
                    className="close-modal"
                    onClick={onRequestClose}
                    type="button"
                >
                    <div className="icon icon-Circle-Cancel" />
                </button>
            </div>
            <div className="modal-content">{children}</div>
        </Fragment>
    </Modal>
);

ModalContainer.propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    withIntl: PropTypes.bool,
    children: PropTypes.node.isRequired,
    overlayClassName: PropTypes.string,
    portalClassName: PropTypes.string
};

ModalContainer.defaultProps = {
    className: "",
    withIntl: true,
    portalClassName: "ReactModalPortalgradient",
    overlayClassName: "ReactModal__Overlay"
};

export default ModalContainer;
