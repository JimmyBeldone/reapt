import React from "react";
import { Trans } from "react-i18next";

import "./ForgottenPassword.styl";
import ForgottenPassword from "../../features/UserPassword/components/ForgottenPassword";

const ForgottenPasswordPage = () => (
    <div className="ForgottenPasswordPage">
        <div className="titles">
            <h2>
                <Trans i18nKey="pages.forgottenPassword.title" />
            </h2>
            <div className="infos">
                <Trans i18nKey="pages.forgottenPassword.infos" />
            </div>
        </div>

        <ForgottenPassword />
    </div>
);

export default ForgottenPasswordPage;
