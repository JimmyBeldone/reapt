/* eslint-disable import/no-extraneous-dependencies */

/** Used in jest.config.js */
import chai from "chai";
import createChaiEnzyme from "chai-enzyme";
import createChaiJestDiff from "chai-jest-diff";
import chaiJestSnapshot from "chai-jest-snapshot";
import enzymeToJSON from "enzyme-to-json/serializer";
import dirtyChai from "dirty-chai";
import sinonChai from "sinon-chai";
import { configure as configureEnzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import "jest-extended";

chai.use(dirtyChai)
    .use(createChaiJestDiff())
    .use(chaiJestSnapshot)
    .use(createChaiEnzyme())
    .use(sinonChai);

// eslint-disable-next-line no-undef
expect.addSnapshotSerializer(enzymeToJSON);

configureEnzyme({ adapter: new Adapter() });
