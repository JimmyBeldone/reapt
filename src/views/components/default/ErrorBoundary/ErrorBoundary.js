import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        render: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: null
        };
    }

    componentDidCatch(error, info) {
        this.setState(state => ({
            ...state,
            hasError: error,
            info
        }));
    }

    render() {
        const { hasError, info } = this.state;
        const { children, render } = this.props;
        if (hasError) {
            return render(info);
        }
        return children;
    }
}

export default ErrorBoundary;
