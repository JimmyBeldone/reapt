import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        location: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

export default withRouter(ScrollToTop);
