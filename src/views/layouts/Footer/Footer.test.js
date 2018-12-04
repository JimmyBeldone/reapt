import React from "react";
import { render } from "enzyme";
import { expect } from "chai";
import Footer from "./Footer";

describe("Test Footer Layout", () => {
    it("Should render", () => {
        const wrapper = render(<Footer />);
    });
});
