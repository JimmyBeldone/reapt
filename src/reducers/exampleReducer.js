const INITIAL_STATE = {
    test: false
};

export default function testReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_TEST":
            return { ...state, test: true };
    }
    return state;
}
