import React, { memo } from "react";

import "./LoginPage.styl";
import LoginForm from "../../features/UserAuth/components/LoginForm";

const LoginPage = memo(() => (
    <div id="loginpage">
        <LoginForm />
    </div>
));

export default LoginPage;
