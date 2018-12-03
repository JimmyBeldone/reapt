import React from "react";
import { render } from "enzyme";
import { expect } from "chai";
``;

import LoadingPage from "./LoadingPage";

describe("Test DateRelative Component", () => {
    it("Should Render", () => {
        const wrapper = render(<LoadingPage />);
    });
});
