import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends PureComponent {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            info: null
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        this.setState(state => ({
            ...state,
            hasError: error,
            info: infoe
        }))
    }

    render() {
        if (this.state.hasError) {
            return [
                <div className="error">Une erreur est survenue : </div>
                <div className="error-info">{this.state.info}</div>
            ]
        }
        return this.props.children
    }
}

export default ErrorBoundary
