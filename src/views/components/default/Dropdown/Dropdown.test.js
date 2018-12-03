import React from "react";
import { expect } from "chai";
import { shallow, render, mount } from "enzyme";
import Dropdown from "./index";
import sinon from "sinon";

describe("Test Dropdown Component", () => {
    const trigger = <span>click</span>;
    const content = [
        <span key="test1">test 1</span>,
        <span key="test2">test 2</span>,
        <span key="test3">test 3</span>
    ];

    it("Should have trigger element", () => {
        const wrapper = render(
            <Dropdown dropdownTrigger={trigger} dropdownContent={content} />
        );
        expect(wrapper.find(".dropdown-trigger").text()).to.equals("click");
    });

    it("Should have 3 content elements", () => {
        const wrapper = render(
            <Dropdown dropdownTrigger={trigger} dropdownContent={content} />
        );
        expect(wrapper.find(".dropdown-content-elem")).to.have.lengthOf(3);
    });

    it("Should have text in first content elem", () => {
        const wrapper = render(
            <Dropdown dropdownTrigger={trigger} dropdownContent={content} />
        );
        expect(
            wrapper
                .find(".dropdown-content-elem")
                .first()
                .text()
        ).to.equals("test 1");
    });

    it("Should open on click", () => {
        const wrapper = shallow(
            <Dropdown dropdownTrigger={trigger} dropdownContent={content} />
        );
        wrapper.find(".dropdown-trigger").simulate("click", {
            preventDefault: () => {}
        });
        expect(wrapper.state("isActiveMenu")).to.equals(true);
    });
});
