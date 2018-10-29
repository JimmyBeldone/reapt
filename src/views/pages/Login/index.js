import React, { memo } from "react";

import "./LoginPage.styl";
import Login from "../../components/Login";

const LoginPage = memo(() => (
    <div id="loginpage">
        <div className="login-bloc">
            <Login />
        </div>
    </div>
));

export default LoginPage;
