import React from "react";
import cookie from "react-cookies";

import * as types from "./types";
import userDataReducer from "./reducer";

describe("Test UserData Reducer", () => {
    cookie.load = jest.fn().mockImplementation(
        key =>
            ({
                token: "frsgshshs",
                userCredentials: "%7B%22username%22%3A%22jimmy%22%7D"
            }[key])
    );
    const reducer = userDataReducer.reducer;

    const INITIAL_STATE = {
        pending: false,
        data: null,
        error: false
    };

    const LOGGED_STATE = {
        pending: false,
        error: false,
        data: {
            username: "jimmy"
        }
    };

    it("Reducer should get initialState", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it("Should handle USER_INIT", () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.USER_INIT,
                payload: { username: "jimmy" }
            })
        ).toEqual({
            pending: false,
            data: { username: "jimmy" },
            error: false
        });
    });

    it("Should handle USER_UPDATE_PENDING", () => {
        expect(
            reducer(LOGGED_STATE, {
                type: types.USER_UPDATE_PENDING
            })
        ).toEqual({
            ...LOGGED_STATE,
            pending: true
        });
    });

    it("Should handle USER_UPDATE_FULFILLED", () => {
        expect(
            reducer(
                { ...LOGGED_STATE, pending: true },
                {
                    type: types.USER_UPDATE_FULFILLED,
                    payload: { username: "jim" }
                }
            )
        ).toEqual({
            ...LOGGED_STATE,
            pending: false,
            data: { username: "jim" }
        });
    });

    it("Should handle USER_UPDATE_REJECTED", () => {
        expect(
            reducer(
                { ...LOGGED_STATE, pending: true },
                {
                    type: types.USER_UPDATE_REJECTED
                }
            )
        ).toEqual({
            ...LOGGED_STATE,
            pending: false,
            error: true
        });
    });
});
