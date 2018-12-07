import cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import axios from "axios";

import setAuthToken from "../../../utils/setAuthToken";

import * as types from "./types";
import {
    configLogin
    // configRefreshToken
} from "./config";

export const logUser = userData => dispatch => {
    console.log(userData);
    const { id, name } = userData;
    const userCredentials = { id, name };

    cookie.save("userCredentials", userCredentials, {
        path: "/"
    });
    cookie.save("user", userData, { path: "/" });

    dispatch({
        type: types.AUTH_LOGIN_FULFILLED,
        payload: userCredentials
    });
    dispatch({ type: types.USER_INIT, payload: userData });
};

export const loginUser = userData => dispatch => {
    dispatch({ type: types.AUTH_LOGIN_PENDING });
    axios
        .post(configLogin.apiRoute, userData)
        .then(response => {
            const { token } = response.data;
            cookie.save("token", token, {
                path: "/"
            });
            // cookie.save(
            //     "refresh_token",
            //     response.data.refresh_token,
            //     { path: "/" }
            // );
            setAuthToken(token);
            const decoded = jwtDecode(token);
            dispatch(logUser(decoded));
        })
        .catch(() => {
            dispatch({
                type: types.AUTH_LOGIN_ERROR,
                payload: configLogin.messageError
            });
        });
};

// export const getCurrentUser = () => dispatch => {
//     dispatch(setUserLoading());
//     axios
//         .get('/api/user/currentuser')
//         .then(res =>
//             dispatch({
//                 type: GET_CURRENT_USER,
//                 payload: res.data,
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_ERRORS,
//                 payload: err.response.data,
//             })
//         );
// };

export const logoutUser = () => dispatch => {
    cookie.remove("userCredentials", { path: "/" });
    cookie.remove("user", { path: "/" });
    // cookie.remove("refresh_token", { path: "/" });
    cookie.remove("token", { path: "/" });
    setAuthToken(false);

    dispatch({ type: types.AUTH_LOGOUT });
};

// export const onRefreshToken = refreshToken => dispatch =>
//     apiUtil(false, dispatch)
//         .post(
//             configRefreshToken.apiRoute,
//             qs.stringify({ refresh_token: refreshToken })
//         )
//         .then(response => {
//             cookie.save("token", response.data.token, { path: "/" });
//             cookie.save("refresh_token", response.data.refresh_token, {
//                 path: "/"
//             });

//             return Promise.resolve({
//                 token: response.data.token,
//                 refresh_token: response.data.refresh_token
//             });
//         })
//         .catch(error => Promise.reject(error));
