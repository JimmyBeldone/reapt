const INITIAL_STATE = {
    match: null,
    pageName: null
};

export const UPDATE_ROUTER = "UPDATE_ROUTER";

export default function routerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_ROUTER: {
            return {
                ...state,
                match: action.payload.match,
                pageName: action.payload.pageName
            };
        }
    }
    return state;
}
