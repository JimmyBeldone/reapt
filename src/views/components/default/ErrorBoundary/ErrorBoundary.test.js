import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import ErrorBoundary from "./ErrorBoundary";

describe("Test ErrorBoundary Component", () => {
    // it("Should Render", () => {
    //     const Children = () => {
    //         return <div>Error</div>;
    //     };
    //     const wrapper = shallow(
    //         <ErrorBoundary>
    //             <Children />
    //         </ErrorBoundary>
    //     );

    //     wrapper.setState({ hasError: true });
    //     expect(wrapper.exists(".error")).to.equal(true);
    // });

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
