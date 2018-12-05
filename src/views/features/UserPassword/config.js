import api from "../../../utils/api";
import { logUser } from "../UserAuth/actions";

/** ****
 * resolveAction : function
 * return (response, dispatch)
 ***** */

export const configAskPassword = {
    messageSuccess: "Un email vient de vous être envoyé",
    messageError: "Une erreur s'est produite",
    withIntl: false,
    apiRoute: "/",
    inputLib: "Email",
    hasResolveAction: false,
    resolveAction: null
};

export const configResetPassword = {
    messageSuccess: "Votre mot de passe a bien été modifié",
    messageError: "Une erreur s'est produite",
    withIntl: false,
    fields: [
        {
            lib: "Mot de passe",
            type: "password",
            name: "password"
        },
        {
            lib: "Confirmer le mot de passe",
            type: "password",
            name: "password-confirm"
        }
    ],
    apiRoute: "/",
    hasResolveAction: true,
    resolveAction: logUser
};

export const configChangePassword = {
    messageSuccess: "Votre mot de passe a bien été modifié",
    messageError: "Une erreur s'est produite",
    withIntl: false,
    fields: [
        {
            lib: "Ancien mot de passe",
            type: "password",
            name: "current-password"
        },
        {
            lib: "Mot de passe",
            type: "password",
            name: "password"
        },
        {
            lib: "Confirmer le mot de passe",
            type: "password",
            name: "password-confirm"
        }
    ],
    apiRoute: "/",
    hasResolveAction: false,
    resolveAction: null
};

export const apiUtil = api;
