import React, { memo } from "react";
import { Trans } from "react-i18next";

import "./LoginPage.styl";
import LoginForm from "../../features/UserAuth/components/LoginForm";

const LoginPage = memo(() => (
    <div id="loginpage">
        <div className="titles">
            <h2>
                <Trans i18nKey="pages.login.title" />
            </h2>
        </div>
        <LoginForm />
    </div>
));

export default LoginPage;
