import React from "react";
import { render } from "enzyme";
import dayjs from "dayjs";
import { expect } from "chai";
import DateRelative from "./DateRelative";
import moment from "moment-timezone";
import { useFakeTimers } from "sinon";

describe("Test DateRelative Component", () => {
    it("Should render date relative from another date", () => {
        const wrapper = render(<DateRelative value="2015-24-01" />);
        expect(wrapper.text()).to.equals("in 3 years");
    });

    it("Should render date relative to another date", () => {
        const wrapper = render(
            <DateRelative relativeTo={false} value="2015-24-01" />
        );
        expect(wrapper.text()).to.equals("3 years ago");
    });

    it("Should render date relative from now", () => {
        var now = moment();
        var clock = useFakeTimers(now);
        // jest.mock("moment", () => () => ({
        //     format: () => "2018–01–30T12:34:56+00:00"
        // }));
        const wrapper = render(<DateRelative relativeNow />);
        clock.restore();
        expect(wrapper.text()).to.matchSnapshot();
    });

    it("Should render date relative to now", () => {
        const wrapper = render(<DateRelative relativeNow relativeTo={false} />);
        expect(wrapper.text()).to.equals("a few seconds ago");
    });
});
