import React from "react";
import cookie from "react-cookies";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import * as types from "./types";
import { loginUser } from "./actions";
import { configLogin, apiUtil } from "./config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test UserAuth Actions", () => {
    cookie.save = jest.fn();

    // afterEach(() => {
    //     fetchMock.restore();
    // });

    it("should create an action to log user", () => {
        const credentials = { _username: "jimmy", _password: "password" };

        // fetchMock.post("/log", {
        //     body: credentials,
        //     headers: { "content-type": "application/json" }
        // });

        const expectedActions = [
            { type: types.AUTH_LOGIN_PENDING },
            {
                type: types.AUTH_LOGIN_FULFILLED,
                payload: { todos: ["do something"] }
            }
        ];

        const store = mockStore({
            pending: false,
            authenticated: false,
            user: null,
            error: false
        });

        // apiUtil.post = jest.fn((url, body) => Promise.resolve({ data: {} }));

        // apiUtil.post("/log", credentials).then(() =>
        //     Promise.resolve({
        //         data: {
        //             data: {
        //                 user: {
        //                     username: "jimmy"
        //                 }
        //             }
        //         }
        //     })
        // );

        // // console.log(apiUtil());

        // store.dispatch(loginUser(credentials));
        // expect(store.getActions()).toEqual(true);
    });
});
