import qs from "qs";
import cookie from "react-cookies";

import * as types from "./types";
import { configLogin, configRefreshToken, apiUtil } from "./config";

export const logUser = response => dispatch => {
    const userData = response.data.data.user;
    const { id, username, email } = userData;
    const userCredentials = { id, username, email };

    cookie.save("userCredentials", userCredentials, { path: "/" });
    cookie.save("user", userData, { path: "/" });
    cookie.save("token", response.data.token, { path: "/" });
    cookie.save("refresh_token", response.data.refresh_token, { path: "/" });

    dispatch({ type: types.AUTH_LOGIN_FULFILLED, payload: userCredentials });
    dispatch({ type: types.USER_INIT, payload: userData });
};

export const loginUser = (_username, _password) => dispatch => {
    dispatch({ type: types.AUTH_LOGIN_PENDING });
    apiUtil(true, dispatch)
        .post(configLogin.apiRoute, qs.stringify({ _username, _password }))
        .then(response => {
            dispatch(logUser(response));
        })
        .catch(error => {
            dispatch({
                type: types.AUTH_LOGIN_ERROR,
                payload: configLogin.messageError
            });
            Promise.reject(error);
        });
};

export const logoutUser = () => dispatch => {
    cookie.remove("userCredentials", { path: "/" });
    cookie.remove("user", { path: "/" });
    cookie.remove("refresh_token", { path: "/" });
    cookie.remove("token", { path: "/" });

    dispatch({ type: types.AUTH_LOGOUT });
};

export const onRefreshToken = refreshToken => dispatch =>
    apiUtil(false, dispatch)
        .post(
            configRefreshToken.apiRoute,
            qs.stringify({ refresh_token: refreshToken })
        )
        .then(response => {
            cookie.save("token", response.data.token, { path: "/" });
            cookie.save("refresh_token", response.data.refresh_token, {
                path: "/"
            });

            return Promise.resolve({
                token: response.data.token,
                refresh_token: response.data.refresh_token
            });
        })
        .catch(error => Promise.reject(error));
