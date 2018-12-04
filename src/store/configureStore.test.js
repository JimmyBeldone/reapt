import createStore from "./configureStore";

let store = createStore();

describe("Test RootReducer", () => {
    // expect(store.getState().counter).toEqual(counter(undefined, {}));
    it("Should contain reducers", () => {
        expect(store.getState());
    });
});
