import createStore from "./configureStore";

let store = createStore();

describe("Test RootReducer", () => {
    it("Should contain reducers", () => {
        expect(store.getState());
    });
});
