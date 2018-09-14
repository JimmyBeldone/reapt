import api from '../../utils/api'

export const configUserUpdate = {
    withIntl: true,
    messageSuccess: '',
    messageError: 'Une erreur s\'est produite',
    apiRoute: '/',
    hasResolveAction: false,
    resolveAction: () => console.log('USER_UPDATE_ACTION - Add function to log user')
}

export const apiUtil = api
