import { combineReducers } from "redux";

import * as types from "./types";

const askPasswordReducerState = {
    pending: false,
    message: "",
    error: false
};

const askPasswordReducer = (state = askPasswordReducerState, action) => {
    switch (action.type) {
        case types.RESETTING_PASSWORD_SEND_EMAIL_PENDING: {
            return { ...state, pending: true, error: false, message: "" };
        }
        case types.RESETTING_PASSWORD_SEND_EMAIL_FULFILLED: {
            return { ...state, pending: false, message: action.payload };
        }
        case types.RESETTING_PASSWORD_SEND_EMAIL_REJECTED: {
            return {
                ...state,
                pending: false,
                error: true,
                message: action.payload
            };
        }
    }
    return state;
};

const resetPasswordState = {
    pending: false,
    message: "",
    error: false
};

const resetPassword = (state = resetPasswordState, action) => {
    switch (action.type) {
        case types.RESETTING_PASSWORD_PENDING: {
            return { ...state, pending: true, error: false, message: "" };
        }
        case types.RESETTING_PASSWORD_FULFILLED: {
            return { ...state, pending: false, message: action.payload };
        }
        case types.RESETTING_PASSWORD_REJECTED: {
            return {
                ...state,
                pending: false,
                error: true,
                message: action.payload
            };
        }
    }
    return state;
};

const changePasswordState = {
    pending: false,
    message: "",
    error: false
};

const changePassword = (state = changePasswordState, action) => {
    switch (action.type) {
        case types.CHANGE_PASSWORD_PENDING: {
            return { ...state, pending: true, error: false, message: "" };
        }
        case types.CHANGE_PASSWORD_FULFILLED: {
            return { ...state, pending: false, message: action.payload };
        }
        case types.CHANGE_PASSWORD_REJECTED: {
            return {
                ...state,
                pending: false,
                error: true,
                message: action.payload
            };
        }
    }
    return state;
};

export default {
    name: "userPassword",
    reducer: combineReducers({
        askPassword: askPasswordReducer,
        resetPassword,
        changePassword
    })
};
