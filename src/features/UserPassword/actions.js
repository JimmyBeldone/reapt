import qs from 'qs'

import * as types from './types'
import { configAskPassword, configResetPassword, apiUtil } from './config'

export const sendEmail = username => dispatch => {

    dispatch({ type: types.RESETTING_PASSWORD_SEND_EMAIL_PENDING })

    apiUtil(true, dispatch).post(configAskPassword.apiRoute, qs.stringify({ username }))
        .then(response => {
            if (response.data.error) {
                dispatch({ type: types.RESETTING_PASSWORD_SEND_EMAIL_REJECTED, payload: response.data.message })
            } else {
                if (configAskPassword.hasResolveAction) {
                    configAskPassword.resolveAction(response, dispatch)
                }
                dispatch({ type: types.RESETTING_PASSWORD_SEND_EMAIL_FULFILLED, payload: configAskPassword.messageSuccess })
            }
        })
        .catch(error => {
            Promise.reject(error)
        })
}

export const resetPassword = (token, password, passwordConfirm) => dispatch => {
    dispatch({ type: types.RESETTING_PASSWORD_PENDING })
    apiUtil(true, dispatch).post(`${configResetPassword.apiRoute + '/' + token}`, qs.stringify({ password, passwordConfirm }))
        .then(response => {
            if (configResetPassword.hasResolveAction) {
                configResetPassword.resolveAction(response, dispatch)
            }
            dispatch({ type: types.RESETTING_PASSWORD_FULFILLED, payload: configResetPassword.messageSuccess })
        })
        .catch(error => {
            dispatch({ type: types.RESETTING_PASSWORD_REJECTED, payload: configResetPassword.messageError })
            Promise.reject(error)
        })
}
