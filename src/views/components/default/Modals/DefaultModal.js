import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import cn from 'classnames'
import Modal from 'react-modal'

import './Modal.styl'
import './DefaultModal.styl'

class DefaultModal extends React.PureComponent {

    static propTypes = {
        children: PropTypes.node,
        title: PropTypes.string,
        isOpen: PropTypes.bool.isRequired,
        portalClassName: PropTypes.string,
        classNames: PropTypes.string,
        closeModal: PropTypes.func.isRequired,
        shouldCloseOnOverlayClick: PropTypes.bool,
        parentSelector: PropTypes.string
    }

    static defaultProps = {
        portalClassName: 'ReactModalPortalDark',
        classNames: '',
        shouldCloseOnOverlayClick: true,
        parentSelector: '#app'
    }

    constructor(props) {
        super(props)
        this.state = {
            activeClass: false
        }
    }

    componentWillMount() {
        if (process.browser !== undefined) {
            Modal.setAppElement('#app')
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isOpen) {
            setTimeout(() => {
                this.setState({activeClass: true})
            }, 100)
        }
    }

    closeModal() {
        this.setState({activeClass: false})
        setTimeout(() => {
            this.props.closeModal()
        }, 100)
    }

    render() {
        const {isOpen, title, children, portalClassName, classNames, parentSelector, shouldCloseOnOverlayClick} = this.props
        return (
            <Modal
                isOpen={isOpen}
                contentLabel="Default Modal"
                portalClassName={portalClassName}
                className={cn('default-modal', classNames, { active: this.state.activeClass })}
                style={{ overlay: {}, content: {} }}
                onRequestClose={this.closeModal.bind(this)}
                shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                parentSelector={() => document.querySelector(parentSelector)}
                shouldReturnFocusAfterClose={false}
            >
                <div className="close-modal" onClick={this.closeModal.bind(this)}>
                    <span className="icon icon-close" />
                </div>
                <div className="modal-header">
                    <div className="title">
                        {title}
                    </div>
                </div>
                <div className="modal-content">
                    {(children !== null) ? React.Children.only(children) : null}
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DefaultModal);
