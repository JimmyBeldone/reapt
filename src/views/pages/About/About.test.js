import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import { MemoryRouter } from "react-router-dom";

import About from "./";
import routesPath from "../../../routes/routesPath";
import mountContainerWithRouter from "../../../../test/mountContainerWithRouter";
import { pack } from "css-mqpacker";

describe("Test About Layout", () => {
    it("Should render", () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={["/about"]}>
                <About routes={routesPath} />
            </MemoryRouter>
        );
        // const options = {
        //     state: {},
        //     container: About,
        //     pathname: "/about",
        //     search: "",
        //     pathToMatch: "/about"
        // };
        // mountContainerWithRouter(options);
    });
});
