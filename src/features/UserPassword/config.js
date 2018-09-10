import {
    API_ROUTE_ASK_NEW_PASSWORD,
    API_ROUTE_CHANGE_PASSWORD
} from '../../constants/apiRoutes'
import api from '../../utils/api'

/******
* resolveAction : function
* return (response, dispatch)
******/

export const configAskPassword = {
    messageSuccess: '',
    messageError: '',
    withIntl: false,
    apiRoute: API_ROUTE_ASK_NEW_PASSWORD,
    hasResolveAction: false,
    resolveAction: () => console.log('RESET_PASSWORD_ACTION - Add function to log user')
}

export const configResetPassword = {
    messageSuccess: '',
    messageError: 'Une erreur s\'est produite',
    withIntl: false,
    apiRoute: API_ROUTE_CHANGE_PASSWORD,
    hasResolveAction: true,
    resolveAction: () => console.log('RESET_PASSWORD_ACTION - Add function to log user')
}

export const apiUtil = api
