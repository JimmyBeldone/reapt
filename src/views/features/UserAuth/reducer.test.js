import React from "react";
import cookie from "react-cookies";

import * as types from "./types";
import authReducer from "./reducer";

describe("Test UserAuth Reducer", () => {
    cookie.load = jest.fn().mockImplementation(
        key =>
            ({
                token: "frsgshshs",
                userCredentials: "%7B%22username%22%3A%22jimmy%22%7D"
            }[key])
    );
    const reducer = authReducer.reducer;

    const INITIAL_STATE = {
        pending: false,
        authenticated: false,
        user: null,
        error: false
    };

    const LOGGED_STATE = {
        pending: false,
        authenticated: true,
        error: false,
        user: {
            username: "jimmy"
        }
    };

    it("Reducer should get initialState", () => {
        cookie.load = jest.fn().mockImplementation(
            key =>
                ({
                    token: "frsgshshs",
                    userCredentials: "%7B%22username%22%3A%22jimmy%22%7D"
                }[key])
        );
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it("Should handle AUTH_LOGIN_PENDING", () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.AUTH_LOGIN_PENDING
            })
        ).toEqual({
            pending: true,
            authenticated: false,
            error: false
        });
    });

    it("Should handle AUTH_LOGIN_FULFILLED", () => {
        expect(
            reducer(
                { ...INITIAL_STATE, pending: true },
                {
                    type: types.AUTH_LOGIN_FULFILLED,
                    payload: { username: "jimmy" }
                }
            )
        ).toEqual(LOGGED_STATE);
    });

    it("Should handle AUTH_LOGIN_ERROR", () => {
        expect(
            reducer(
                { ...INITIAL_STATE, pending: true },
                {
                    type: types.AUTH_LOGIN_ERROR
                }
            )
        ).toEqual({
            pending: false,
            authenticated: false,
            error: true,
            user: null
        });
    });

    it("Should handle USER_CREDENTIALS_UPDATE", () => {
        expect(
            reducer(LOGGED_STATE, {
                type: types.USER_CREDENTIALS_UPDATE,
                payload: { username: "jim" }
            })
        ).toEqual({
            pending: false,
            authenticated: true,
            error: false,
            user: {
                username: "jim"
            }
        });
    });

    it("Should handle AUTH_LOGOUT", () => {
        expect(
            reducer(LOGGED_STATE, {
                type: types.AUTH_LOGOUT
            })
        ).toEqual(INITIAL_STATE);
    });
});
