import api from "../../../utils/api";
import { PAGE_HOME, PAGE_FORGOTTEN_PASSWORD } from "../../../constants/router";
import { API_ROUTE_USER_LOGIN } from "../../../constants/apiRoutes";

/** ****
 * resolveAction : function
 * return (response, dispatch)
 ***** */

export const configLogin = {
    messageSuccess: "",
    messageError: "",
    withIntl: false,
    apiRoute: process.env.API_URL + API_ROUTE_USER_LOGIN,
    passwordPath: PAGE_FORGOTTEN_PASSWORD,
    fields: [
        { lib: "pages.login.fields.login", type: "text", name: "email" },
        {
            lib: "pages.login.fields.pw",
            type: "password",
            name: "password"
        }
    ],
    link: "pages.login.link",
    formBtn: "pages.login.btn",
    hasResolveAction: false,
    resolveAction: null
};

export const configRefreshToken = {
    messageSuccess: "",
    messageError: "",
    withIntl: false,
    apiRoute: "/refresh_token",
    fields: [],
    hasResolveAction: false,
    resolveAction: null
};

export const configLogout = {
    homePath: PAGE_HOME,
    lib: "nav.logout",
    withIntl: true
};

export const apiUtil = api;
