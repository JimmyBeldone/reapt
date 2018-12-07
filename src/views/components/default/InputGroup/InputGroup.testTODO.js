// import React from "react";
// import { render, shallow, mount } from "enzyme";
// import InputGroup from "./InputGroup";

// describe("Test InputGroup Component", () => {
//     let props = {
//         name: "login",
//         label: "Login",
//         // ref: "input-login",
//         errorField: "",
//         withIntl: false
//     };

//     it("Should render", () => {
//         const wrapper = render(<InputGroup {...props} />);
//     });

//     it("Should works with erroField", () => {
//         const wrapper = render(<InputGroup {...props} errorField={"Login"} />);
//     });

//     it("Should works with erroField", () => {
//         const wrapper = shallow(<InputGroup {...props} errorField={"Login"} />);
//         expect(wrapper.exists(".error")).toBe(true);
//     });

//     it("Should works with ref", () => {
//         let ref = null;
//         const wrapper = mount(<InputGroup {...props} />);
//         expect(wrapper.instance().input).toBeTruthy();
//     });
// });
