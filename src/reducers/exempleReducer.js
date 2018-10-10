const INITIAL_STATE = {
    test: true
};

export default function testReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "test":
            break;
        default:
    }
    return state;
}
