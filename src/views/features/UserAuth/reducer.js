import cookie from "react-cookies";

import * as types from "./types";

const token = cookie.load("token");
let user = null;

if (token) {
    const cookieUser = cookie.load("userCredentials");
    if (cookieUser) {
        user = cookieUser;
    }
}

const authState = {
    pending: false,
    authenticated: user !== null,
    user,
    error: false,
    message: ""
};

const authReducer = (state = authState, action) => {
    switch (action.type) {
        case types.AUTH_LOGIN_PENDING: {
            return {
                pending: true,
                authenticated: false,
                error: false,
                message: ""
            };
        }
        case types.AUTH_LOGIN_FULFILLED: {
            return {
                ...state,
                pending: false,
                authenticated: true,
                user: action.payload
            };
        }
        case types.AUTH_LOGIN_ERROR: {
            return {
                ...state,
                pending: false,
                error: true
            };
        }
        case types.USER_CREDENTIALS_UPDATE: {
            return {
                ...state,
                user: action.payload
            };
        }
        case types.AUTH_LOGOUT: {
            return {
                pending: false,
                authenticated: false,
                user: null,
                error: false,
                message: ""
            };
        }
    }
    return state;
};

export default { name: "auth", reducer: authReducer };
