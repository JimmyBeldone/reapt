import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import DefaultLayout from "./DefaultLayout";

describe("Test DefaultLayout Layout", () => {
    it("Should render", () => {
        const Children = () => <div>test</div>;
        const wrapper = shallow(
            <DefaultLayout>
                <Children />
            </DefaultLayout>
        );
    });
});
