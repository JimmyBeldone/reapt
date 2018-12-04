import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Header from "./Header";

describe("Test Header Layout", () => {
    it("Should render", () => {
        const wrapper = shallow(<Header />);
    });
});
