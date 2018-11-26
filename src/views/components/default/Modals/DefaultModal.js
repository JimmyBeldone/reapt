import React, { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Modal from "react-modal";

import "./Modal.styl";
import "./DefaultModal.styl";

Modal.setAppElement("#app");

const DefaultModal = ({ onRequestClose, ...props }) => {
    const { classNames } = props;
    return (
        <Modal
            isOpen
            contentLabel="Default Modal"
            overlayClassName="ReactModalPortalDark"
            className={cn("default-modal", classNames)}
            style={{ overlay: {}, content: {} }}
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={true}
            shouldReturnFocusAfterClose={false}
        >
            <Fragment>
                <div
                    className="close-modal"
                    onClick={onRequestClose}
                    role="button"
                    tabIndex={0}
                >
                    x
                </div>
                <div className="modal-content">
                    {/* {children !== null ? React.Children.only(children) : null} */}
                    I&apos;m a modal
                </div>
            </Fragment>
        </Modal>
    );
};

DefaultModal.propTypes = {
    // children: PropTypes.element.isRequired,
    classNames: PropTypes.string,
    onRequestClose: PropTypes.func.isRequired
};

DefaultModal.defaultProps = {
    classNames: ""
};

export default DefaultModal;
