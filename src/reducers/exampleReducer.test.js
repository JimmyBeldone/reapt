import reducer from "./exampleReducer";

const INITIAL_STATE = {
    test: false
};

describe("Test ExampleReducer", () => {
    it("Should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('Should handle action "test"', () => {
        expect(
            reducer([], {
                type: "SET_TEST"
            })
        ).toEqual({ test: true });
    });
});
