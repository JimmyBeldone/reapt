import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Nav from "./";

describe("Test Nav Layout", () => {
    it("Should render", () => {
        const wrapper = shallow(<Nav />);
    });
});
