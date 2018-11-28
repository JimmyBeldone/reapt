import React from "react";
import PropTypes from "prop-types";

import "./DefaultModal.styl";

import ModalContainer from "./ModalContainer";

const DefaultModal = props => (
    <ModalContainer
        {...props}
        isOpen
        overlayClassName="ReactModalPortalDark"
        className="default-modal"
        withIntl={true}
        title="modals.default.title"
    >
        I&apos;m a modal
    </ModalContainer>
);

DefaultModal.propTypes = {
    classNames: PropTypes.string
};

DefaultModal.defaultProps = {
    classNames: ""
};

export default DefaultModal;
