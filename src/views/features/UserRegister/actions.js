import axios from "axios";

import * as types from "./types";
import { configRegister } from "./config";

export const registerUser = (userData, history) => dispatch => {
    axios
        .post(configRegister.apiRoute, userData)
        .then(() => {
            if (configRegister.hasResolveAction) {
                const { password, email } = userData;
                const data = { password, email };
                dispatch(configRegister.resolveAction(data));
            } else {
                history.push("/login");
            }
        })
        .catch(err =>
            dispatch({
                type: types.GET_ERRORS,
                payload: err.response.data
            })
        );
};
