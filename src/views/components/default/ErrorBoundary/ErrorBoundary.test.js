import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import ErrorBoundary from "./ErrorBoundary";

describe("Test ErrorBoundary Component", () => {
    it("Should catches error and renders message", () => {
        const Child = () => {
            throw "error";
        };

        const pauseErrorLogging = codeToRun => {
            const logger = console.error;
            console.error = () => {};

            codeToRun();

            console.error = logger;
        };
        pauseErrorLogging(() => {
            const wrapper = mount(
                <ErrorBoundary render={() => <div>Error has occured</div>}>
                    <Child />
                </ErrorBoundary>
            );
            expect(wrapper.text()).to.equal("Error has occured");
        });
    });
});
