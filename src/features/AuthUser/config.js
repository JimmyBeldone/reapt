import api from '../../utils/api'
import { PAGE_HOME } from '../../constants/router'

/******
* resolveAction : function
* return (response, dispatch)
******/

export const configLogin = {
    messageSuccess: 'Un email vient de vous être envoyé',
    messageError: 'Une erreur s\'est produite',
    withIntl: false,
    apiRoute: '/log',
    passwordPath: '/password',
    fields: [
        {
            lib: 'Mot de passe',
            type: 'password',
            name: 'password'
        }, {
            lib: 'Confirmer le mot de passe',
            type: 'password',
            name: 'password-confirm'
        }
    ],
    hasResolveAction: false,
    resolveAction: () => console.log('RESET_PASSWORD_ACTION - Add function to log user')
}

export const configRefreshToken = {
    messageSuccess: 'Un email vient de vous être envoyé',
    messageError: 'Une erreur s\'est produite',
    withIntl: false,
    apiRoute: '/refresh_token',
    fields: [],
    hasResolveAction: false,
    resolveAction: () => console.log('RESET_PASSWORD_ACTION - Add function to log user')
}

export const configLogout = {
    homePath: PAGE_HOME,
    lib: 'usermenu.logout',
    withIntl: true
}

export const apiUtil = api
