import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Trans } from "react-i18next";

import "./ResettingPasswordPage.styl";

import ResettingPasswordContainer from "../../../features/UserPassword/containers/ResettingPasswordContainer";

const ResettingPasswordPage = ({ match }) => (
    <div className="ResettingPasswordPage">
        <h2>
            <Trans i18nKey="pages.forgottenPassword.title" />
        </h2>
        <ResettingPasswordContainer token={match.params.token} />
    </div>
);

ResettingPasswordPage.propTypes = {
    match: PropTypes.object.isRequired
};

export default ResettingPasswordPage;
