import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import "./ForgottenPassword.styl";
import ForgottenPassword from "../../features/UserPassword/components/ForgottenPassword";

const ForgottenPasswordPage = memo(() => (
    <div className="ForgottenPasswordPage">
        <div className="titles">
            <h2>
                <FormattedMessage id="pages.forgottenPassword.title" />
            </h2>
            <div className="infos">
                <FormattedMessage id="pages.forgottenPassword.infos" />
            </div>
        </div>

        <ForgottenPassword />
    </div>
));

export default ForgottenPasswordPage;
