import qs from 'qs'

import * as types from './types'
import { configAskPassword, configResetPassword, configChangePassword, apiUtil } from './config'

export const sendEmail = username => dispatch => {

    dispatch({ type: types.RESETTING_PASSWORD_SEND_EMAIL_PENDING })

    apiUtil(true, dispatch).post(configAskPassword.apiRoute, qs.stringify({ username }))
        .then(response => {
            if (response.data.error) {
                dispatch({ type: types.RESETTING_PASSWORD_SEND_EMAIL_REJECTED, payload: configAskPassword.messageError })
            } else {
                dispatch({ type: types.RESETTING_PASSWORD_SEND_EMAIL_FULFILLED, payload: configAskPassword.messageSuccess })
                if (configAskPassword.hasResolveAction) {
                    configAskPassword.resolveAction(response, dispatch)
                }
            }
        })
        .catch(error => {
            Promise.reject(error)
        })
}

export const resetPassword = (token, password) => dispatch => {
    dispatch({ type: types.RESETTING_PASSWORD_PENDING })
    apiUtil(true, dispatch).post(`${configResetPassword.apiRoute + '/' + token}`, qs.stringify({ password }))
        .then(response => {
            dispatch({ type: types.RESETTING_PASSWORD_FULFILLED, payload: configResetPassword.messageSuccess })
            if (configResetPassword.hasResolveAction) {
                dispatch(configResetPassword.resolveAction(dispatch, response))
            }
        })
        .catch(error => {
            dispatch({ type: types.RESETTING_PASSWORD_REJECTED, payload: configResetPassword.messageError })
            Promise.reject(error)
        })
}

export const changePassword = (current, password) => dispatch => {
    dispatch({ type: types.CHANGE_PASSWORD_PENDING })
    apiUtil(false, dispatch).post(configChangePassword.apiRoute, qs.stringify({ current_password: current, password }))
        .then(response => {
            dispatch({ type: types.CHANGE_PASSWORD_FULFILLED, payload: configChangePassword.messageSuccess })
            if (configChangePassword.hasResolveAction) {
                dispatch(configChangePassword.resolveAction(dispatch, response))
            }
        })
        .catch(error => {
            dispatch({ type: types.CHANGE_PASSWORD_REJECTED, payload: configChangePassword.messageError })
            Promise.reject(error)
        })
}
