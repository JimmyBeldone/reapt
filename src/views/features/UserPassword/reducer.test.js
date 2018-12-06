import React from "react";

import * as types from "./types";
import userPasswordReducer from "./reducer";
import {
    configAskPassword,
    configResetPassword,
    configChangePassword
} from "./config";

describe("Test UserPassword Reducer", () => {
    const reducer = userPasswordReducer.reducer;

    const INITIAL_STATE = {
        askPassword: { pending: false, message: "", error: false },
        resetPassword: { pending: false, message: "", error: false },
        changePassword: { pending: false, message: "", error: false }
    };

    const { askPassword, resetPassword, changePassword } = INITIAL_STATE;

    it("Reducer should get initialState", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    // Ask Password

    it("Should handle RESETTING_PASSWORD_SEND_EMAIL_PENDING", () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.RESETTING_PASSWORD_SEND_EMAIL_PENDING
            })
        ).toEqual({
            ...INITIAL_STATE,
            askPassword: {
                ...askPassword,
                pending: true
            }
        });
    });

    it("Should handle RESETTING_PASSWORD_SEND_EMAIL_FULFILLED", () => {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    askPassword: { ...askPassword, pending: true }
                },
                {
                    type: types.RESETTING_PASSWORD_SEND_EMAIL_FULFILLED,
                    payload: configAskPassword.messageSuccess
                }
            )
        ).toEqual({
            ...INITIAL_STATE,
            askPassword: {
                ...askPassword,
                pending: false,
                message: configAskPassword.messageSuccess
            }
        });
    });

    it("Should handle RESETTING_PASSWORD_SEND_EMAIL_REJECTED", () => {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    askPassword: { ...askPassword, pending: true }
                },
                {
                    type: types.RESETTING_PASSWORD_SEND_EMAIL_REJECTED,
                    payload: configAskPassword.messageError
                }
            )
        ).toEqual({
            ...INITIAL_STATE,
            askPassword: {
                ...askPassword,
                pending: false,
                error: true,
                message: configAskPassword.messageError
            }
        });
    });

    // Reset Password

    it("Should handle RESETTING_PASSWORD_PENDING", () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.RESETTING_PASSWORD_PENDING
            })
        ).toEqual({
            ...INITIAL_STATE,
            resetPassword: {
                ...resetPassword,
                pending: true
            }
        });
    });

    it("Should handle RESETTING_PASSWORD_FULFILLED", () => {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    resetPassword: { ...resetPassword, pending: true }
                },
                {
                    type: types.RESETTING_PASSWORD_FULFILLED,
                    payload: configResetPassword.messageSuccess
                }
            )
        ).toEqual({
            ...INITIAL_STATE,
            resetPassword: {
                ...resetPassword,
                pending: false,
                message: configResetPassword.messageSuccess
            }
        });
    });

    it("Should handle RESETTING_PASSWORD_REJECTED", () => {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    resetPassword: { ...resetPassword, pending: true }
                },
                {
                    type: types.RESETTING_PASSWORD_REJECTED,
                    payload: configResetPassword.messageError
                }
            )
        ).toEqual({
            ...INITIAL_STATE,
            resetPassword: {
                ...resetPassword,
                pending: false,
                error: true,
                message: configResetPassword.messageError
            }
        });
    });

    // Change Password

    it("Should handle CHANGE_PASSWORD_PENDING", () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.CHANGE_PASSWORD_PENDING
            })
        ).toEqual({
            ...INITIAL_STATE,
            changePassword: {
                ...changePassword,
                pending: true
            }
        });
    });

    it("Should handle CHANGE_PASSWORD_FULFILLED", () => {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    changePassword: { ...changePassword, pending: true }
                },
                {
                    type: types.CHANGE_PASSWORD_FULFILLED,
                    payload: configChangePassword.messageSuccess
                }
            )
        ).toEqual({
            ...INITIAL_STATE,
            changePassword: {
                ...changePassword,
                pending: false,
                message: configChangePassword.messageSuccess
            }
        });
    });

    it("Should handle CHANGE_PASSWORD_REJECTED", () => {
        expect(
            reducer(
                {
                    ...INITIAL_STATE,
                    changePassword: { ...changePassword, pending: true }
                },
                {
                    type: types.CHANGE_PASSWORD_REJECTED,
                    payload: configChangePassword.messageError
                }
            )
        ).toEqual({
            ...INITIAL_STATE,
            changePassword: {
                ...changePassword,
                pending: false,
                error: true,
                message: configChangePassword.messageError
            }
        });
    });
});
