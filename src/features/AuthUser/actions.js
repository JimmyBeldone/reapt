import qs from 'qs'
import cookie from 'react-cookies'
import { pick } from 'lodash'

import * as types from './types'
import { configLogin, configRefreshToken, apiUtil } from './config'

export const logUser = (dispatch, response) => dispatch => {
    const userDatas = response.data.data.user
    const userCredentials = pick(userDatas, ['id', 'username', 'email'])

    cookie.save('userCredentials', userCredentials, { path: '/' })
    cookie.save('user', userDatas, { path: '/' })
    cookie.save('token', response.data.token, { path: '/' })
    cookie.save('refresh_token', response.data.refresh_token, { path: '/' })

    dispatch({ type: types.AUTH_LOGIN_FULFILLED, payload: userCredentials })
    dispatch({ type: types.USER_INIT, payload: userDatas })
}

export const loginUser = (_username, _password) => dispatch => {
    dispatch({ type: types.AUTH_LOGIN_PENDING })
    apiUtil(true, dispatch).post(configLogin.apiRoute, qs.stringify({ _username, _password }))
        .then((response) => {
            dispatch(logUser(dispatch, response))
        })
        .catch((error) => {
            dispatch({ type: types.AUTH_LOGIN_ERROR, payload: configLogin.messageError })
            Promise.reject(error)
        })
}

export const logoutUser = () => dispatch => {
    cookie.remove('userCredentials', { path: '/' })
    cookie.remove('user', { path: '/' })
    cookie.remove('refresh_token', { path: '/' })
    cookie.remove('token', { path: '/' })

    dispatch({ type: types.AUTH_LOGOUT })
}

export const onRefreshToken = refreshToken => dispatch => {
    return apiUtil(false, dispatch).post(configRefreshToken.apiRoute, qs.stringify({ refresh_token: refreshToken }))
        .then(response => {

            cookie.save('token', response.data.token, { path: '/' });
            cookie.save('refresh_token', response.data.refresh_token, { path: '/' });

            return Promise.resolve({
                token: response.data.token,
                refresh_token: response.data.refresh_token
            });
        })
        .catch(error => Promise.reject(error))
}
