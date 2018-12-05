import React from "react";
import { shallow, mount } from "enzyme";
import SwitchLangBtn from ".";

describe("Test SwitchLangBtn Component", () => {
    it("Should render", () => {
        const wrapper = shallow(<SwitchLangBtn />);
        expect(wrapper);
    });

    it("Should handle selection", () => {
        const wrapper = shallow(<SwitchLangBtn />);
        const select = wrapper.find("select");
        select.props().onChange({
            currentTarget: { value: "fr-FR" }
        });
    });
});
