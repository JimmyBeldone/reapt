import cookie from "react-cookies";

import * as types from "./types";

const token = cookie.load("token");
let user = null;

if (token) {
    const cookieUser = cookie.load("user");
    if (cookieUser) user = cookieUser;
}

const userState = {
    pending: false,
    data: user,
    error: false
};

const UserReducer = (state = userState, action) => {
    switch (action.type) {
        case types.USER_INIT: {
            return { ...state, data: action.payload };
        }
        case types.USER_UPDATE_PENDING: {
            return { ...state, pending: true, error: false };
        }
        case types.USER_UPDATE_FULFILLED: {
            return { ...state, pending: false, data: action.payload };
        }
        case types.USER_UPDATE_REJECTED: {
            return { ...state, pending: false, error: true };
        }
    }
    return state;
};

export default {
    name: "user",
    reducer: UserReducer
};
