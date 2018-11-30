import React from "react";
import { render } from "enzyme";
import dayjs from "dayjs";
import DateRelative from "./DateRelative";
import moment from "moment-timezone";

describe("Test DateRelative Component", () => {
    it("Should render date relative from another date", () => {
        const wrapper = render(<DateRelative value="2015-24-01" />);
        expect(wrapper.text()).toBe("in 2 years");
    });

    it("Should render date relative to another date", () => {
        const wrapper = render(
            <DateRelative relativeTo={false} value="2015-24-01" />
        );
        expect(wrapper.text()).toBe("2 years ago");
    });

    it("Should render date relative from now", () => {
        jest.mock("moment", () => () => ({
            format: () => "2018–01–30T12:34:56+00:00"
        }));
        const wrapper = render(<DateRelative relativeNow />);
        expect(wrapper.text()).toMatchSnapshot();
    });

    it("Should render date relative to now", () => {
        const wrapper = render(<DateRelative relativeNow relativeTo={false} />);
        expect(wrapper.text()).toBe("a few seconds ago");
    });
});
