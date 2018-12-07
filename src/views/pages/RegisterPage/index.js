import React from "react";
import { Trans } from "react-i18next";

import RegisterForm from "../../features/UserRegister/components/RegisterForm";

const RegisterPage = () => (
    <div id="RegisterPage">
        <div className="titles">
            <h2>
                <Trans i18nKey="pages.register.title" />
            </h2>
        </div>
        <RegisterForm />
    </div>
);

export default RegisterPage;
