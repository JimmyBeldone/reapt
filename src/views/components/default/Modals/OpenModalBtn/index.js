import React from "react";
import PropTypes from "prop-types";

import "./OpenModalBtn";
import { ModalConsumer } from "../../../../../providers/ModalProvider";

const OpenModalBtn = props => (
    <ModalConsumer>
        {({ showModal }) => (
            <div
                className="open-modal-btn"
                onClick={() => showModal(props.modal, { className: "test" })}
                role="button"
                tabIndex={0}
            >
                {props.children}
            </div>
        )}
    </ModalConsumer>
);

OpenModalBtn.propTypes = {
    // className: PropTypes.string.isRequired,
    modal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

OpenModalBtn.defaultProps = {
    // className: '',
    // modal: DefaultModal,
};

export default OpenModalBtn;
