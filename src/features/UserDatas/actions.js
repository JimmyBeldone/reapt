import cookie from 'react-cookies'
import qs from 'qs'
import { pick } from 'lodash'

import * as types from './types'
import { configUserUpdate, apiUtil } from './config'

export const userUpdate = user => dispatch => {
    dispatch({ type: types.USER_UPDATE_PENDING })
    apiUtil(false, dispatch).post(configUserUpdate.apiRoute, qs.stringify(user))
        .then(response => {
            const userDatas = response.data.data.user
            const userCredentials = pick(userDatas, ['id', 'username', 'email'])

            cookie.save('userCredentials', userCredentials, { path: '/' })
            cookie.save('user', userDatas, { path: '/' })

            dispatch({ type: types.USER_UPDATE_FULFILLED, payload: userDatas })
            dispatch({ type: types.USER_CREDENTIALS_UPDATE, payload: userCredentials })
            if (configUserUpdate.hasResolveAction) {
                configUserUpdate.resolveAction(response, dispatch)
            }
        })
        .catch(err => {
            dispatch({ type: types.USER_UPDATE_REJECTED, payload: configUserUpdate.messageError })
            Promise.reject(err)
        })
}
