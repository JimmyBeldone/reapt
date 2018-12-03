import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import ErrorBoundary from "./ErrorBoundary";

describe("Test ErrorBoundary Component", () => {
    it("Should Render", () => {
        const Children = () => {
            return <div>Error</div>;
        };
        const wrapper = shallow(
            <ErrorBoundary>
                <Children />
            </ErrorBoundary>
        );

        wrapper.setState({ hasError: true });
        expect(wrapper.exists(".error")).to.equal(true);
    });
});
