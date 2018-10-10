import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: null
        };
    }

    componentDidCatch(error, info) {
        console.log(error);
        this.setState(state => ({
            ...state,
            hasError: error,
            info
        }));
    }

    render() {
        const { hasError, info } = this.state;
        const { children } = this.props;
        if (hasError) {
            return [
                <div key="A" className="error">
                    Une erreur est survenue :{" "}
                </div>,
                <div key="B" className="error-info">
                    {info}
                </div>
            ];
        }
        return children;
    }
}

export default ErrorBoundary;
