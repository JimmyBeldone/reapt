import api from "../../../utils/api";
import { PAGE_HOME, PAGE_FORGOTTEN_PASSWORD } from "../../../constants/router";

/** ****
 * resolveAction : function
 * return (response, dispatch)
 ***** */

export const configLogin = {
    messageSuccess: "Un email vient de vous être envoyé",
    messageError: "Une erreur s'est produite",
    withIntl: false,
    apiRoute: "/log",
    passwordPath: PAGE_FORGOTTEN_PASSWORD,
    fields: [
        {
            lib: "Login",
            type: "text",
            name: "username"
        },
        {
            lib: "Mot de passe",
            type: "password",
            name: "password"
        }
    ],
    hasResolveAction: false,
    resolveAction: () =>
        console.log("RESET_PASSWORD_ACTION - Add function to log user")
};

export const configRefreshToken = {
    messageSuccess: "Un email vient de vous être envoyé",
    messageError: "Une erreur s'est produite",
    withIntl: false,
    apiRoute: "/refresh_token",
    fields: [],
    hasResolveAction: false,
    resolveAction: () =>
        console.log("RESET_PASSWORD_ACTION - Add function to log user")
};

export const configLogout = {
    homePath: PAGE_HOME,
    lib: "usermenu.logout",
    withIntl: true
};

export const apiUtil = api;
