import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Trans } from "react-i18next";
import { push } from "connected-react-router";
import cn from "classnames";

import "./Logoutbutton.styl";

import { logoutUser } from "../../actions";
import { configLogout } from "../../config";

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
    redirectHome: () => dispatch(push(configLogout.homePath))
});

class LogoutButton extends PureComponent {
    static propTypes = {
        logoutUser: PropTypes.func.isRequired,
        redirectHome: PropTypes.func.isRequired,
        className: PropTypes.string,
        lib: PropTypes.string
    };

    static defaultProps = {
        className: "",
        lib: configLogout.lib
    };

    handleLogout() {
        const { logoutUser, redirectHome } = this.props;
        logoutUser();
        redirectHome();
    }

    render() {
        const { className, lib } = this.props;
        return (
            <button
                className={cn("LogoutButton", className)}
                onClick={this.handleLogout.bind(this)}
                type="button"
            >
                {configLogout.withIntl ? <Trans i18nKey={lib} /> : lib}
            </button>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(LogoutButton);
