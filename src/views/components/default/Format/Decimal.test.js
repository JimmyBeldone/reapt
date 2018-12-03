import React from "react";
import { expect } from "chai";
import { render } from "enzyme";

import DecimalTest from "./Decimal";

describe("Test Decimal Component", () => {
    it("Should render N/A if null", () => {
        const wrapper = render(<DecimalTest />);
        expect(wrapper.text()).to.equal("N/A");
    });

    it("Should render int value", () => {
        const wrapper = render(<DecimalTest value={10} />);
        expect(wrapper.text()).to.equal("10");
    });

    it("Should render average", () => {
        const wrapper = render(<DecimalTest value={1000} average />);
        expect(wrapper.text()).to.equal("1k");
    });

    it("Should round average to superior", () => {
        const wrapper = render(
            <DecimalTest value={24567} fractionDigits={0} average />
        );
        expect(wrapper.text()).to.equal("25k");
    });

    it("Should render value in percent", () => {
        const wrapper = render(<DecimalTest value={0.245} isPercent />);
        expect(wrapper.text()).to.equal("24.50%");
    });

    it("Should round percent to superior", () => {
        const wrapper = render(
            <DecimalTest value={0.245} isPercent fractionDigits={0} />
        );
        expect(wrapper.text()).to.equal("25%");
    });

    it("Should render positive evolution", () => {
        const wrapper = render(<DecimalTest value={10} isEvolution />);
        expect(wrapper.text()).to.equal("+10");
    });

    it("Should render positive percent evolution", () => {
        const wrapper = render(
            <DecimalTest value={0.245} isEvolution isPercent />
        );
        expect(wrapper.text()).to.equal("+24.50%");
    });

    it("Should render negative evolution", () => {
        const wrapper = render(<DecimalTest value={-10} isEvolution />);
        expect(wrapper.text()).to.equal("-10");
    });

    it("Should render positive percent evolution", () => {
        const wrapper = render(
            <DecimalTest value={-0.245} isEvolution isPercent />
        );
        expect(wrapper.text()).to.equal("-24.50%");
    });

    it("Should render us currency", () => {
        const wrapper = render(<DecimalTest value={245} isCurrency />);
        expect(wrapper.text()).to.equal("$245");
    });

    it("Should render average us currency", () => {
        const wrapper = render(
            <DecimalTest value={245643} isCurrency average fractionDigits={0} />
        );
        expect(wrapper.text()).to.equal("$246k");
    });
});
