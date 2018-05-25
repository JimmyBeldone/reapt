import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import OverlayTemplate from './OverlayTemplate'
import './Overlay.styl'

export default class Overlay extends PureComponent {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        closeIcon: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        closeClassName: PropTypes.string.isRequired
    }

    static defaultProps = {
        closeClassName: 'overlay-icon-close',
        closeIcon: 'x'
    }

    constructor(props) {
        super(props)
        this.overlayContainer = document.createElement('div')
    }

    componentDidMount() {
        document.body.appendChild(this.overlayContainer)
    }

    componentWillUnmount() {
        document.body.removeChild(this.overlayContainer)
    }

    render() {
        return ReactDOM.createPortal(
            <OverlayTemplate {...this.props} />,
            this.overlayContainer
        )
    }
}
