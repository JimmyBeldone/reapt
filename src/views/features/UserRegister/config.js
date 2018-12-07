import { API_ROUTE_USER_REGISTER } from "../../../constants/apiRoutes";
import { PAGE_LOGIN } from "../../../constants/router";
import { loginUser } from "../UserAuth/actions";

export const configRegister = {
    messageSuccess: "",
    messageError: "",
    withIntl: false,
    apiRoute: process.env.API_URL + API_ROUTE_USER_REGISTER,
    loginPath: PAGE_LOGIN,
    fields: [
        {
            lib: "pages.register.fields.username",
            type: "text",
            name: "username"
        },
        { lib: "pages.register.fields.email", type: "text", name: "email" },
        {
            lib: "pages.register.fields.password",
            type: "password",
            name: "password"
        },
        {
            lib: "pages.register.fields.confirmPass",
            type: "password",
            name: "passwordConfirm"
        }
    ],
    link: {
        text: "pages.register.link.text",
        button: "pages.register.link.btn"
    },
    formBtn: "pages.register.btn",
    hasResolveAction: true,
    resolveAction: loginUser
};
