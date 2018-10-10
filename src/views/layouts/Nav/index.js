import React, { PureComponent } from "react";
// import PropTypes from 'prop-types'

import NavTemplate from "./NavTemplate";

class Nav extends PureComponent {
    static propTypes = {};

    state = {
        hasError: false
    };

    render() {
        const { hasError } = this.state;
        if (hasError) {
            return <div>Une erreur est survenue</div>;
        }
        return <NavTemplate />;
    }
}

export default Nav;
