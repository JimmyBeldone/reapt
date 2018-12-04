import RouterParamsMiddleware from "./routerParamsMiddleware";
import routesPath from "../routes/routesPath";

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    };
    const next = jest.fn();

    const invoke = action => RouterParamsMiddleware(store)(next)(action);

    return { store, next, invoke };
};

describe("Test routerParamMiddleware", () => {
    it("Should passes through non-function action", () => {
        const { next, invoke } = create();
        const action = { type: "TEST" };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    });

    it("Should handle 404", () => {
        const { store, invoke } = create();
        const action = {};
        action.type = "@@router/LOCATION_CHANGE";
        action.payload = {
            location: {
                pathname: "/feef",
                search: "",
                hash: ""
            },
            action: "POP",
            match: {
                isExact: false,
                params: {}
            },
            pageName: "404"
        };
        invoke(action);
    });

    it("Should handle declared route", () => {
        const { store, invoke } = create();
        const action = {};
        action.type = "@@router/LOCATION_CHANGE";
        action.payload = {
            location: { pathname: "/", search: "", hash: "" },
            action: "POP",
            match: { isExact: true, params: {} },
            pageName: "/"
        };
        invoke(action);
    });
});
