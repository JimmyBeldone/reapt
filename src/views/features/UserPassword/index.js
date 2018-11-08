import * as actions from "./actions";
import * as types from "./types";
import * as utils from "./utils";
import reducer from "./reducer";
import ForgottenPassword from "./components/ForgottenPassword";

export default {
    name: "ForgottenPassword",
    actions,
    reducer,
    types,
    utils,
    containers: {},
    components: {
        ForgottenPassword
    }
};
