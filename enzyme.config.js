/* eslint-disable import/no-extraneous-dependencies */

/** Used in jest.config.js */
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-extended";

configure({ adapter: new Adapter() });
