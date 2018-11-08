import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import "./LoginPage.styl";
import LoginForm from "../../features/UserAuth/components/LoginForm";

const LoginPage = memo(() => (
    <div id="loginpage">
        <div className="titles">
            <h2>
                <FormattedMessage id="pages.login.title" />
            </h2>
        </div>
        <LoginForm />
    </div>
));

export default LoginPage;
