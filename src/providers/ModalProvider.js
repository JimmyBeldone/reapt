import React, { PureComponent, createContext } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

export default class ModalProvider extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    showModal = (content, props = {}) => {
        this.setState({
            content,
            props
        });
    };

    hideModal = () => {
        this.setState({
            content: null,
            props: {}
        });
    };

    state = {
        content: null,
        props: {},
        showModal: this.showModal,
        hideModal: this.hideModal
    };

    render() {
        const { content, props, showModal, hideModal } = this.state;
        const { children } = this.props;
        return (
            <ModalContext.Provider
                value={{ content, props, showModal, hideModal }}
            >
                {children}
            </ModalContext.Provider>
        );
    }
}

export const ModalConsumer = ModalContext.Consumer;
