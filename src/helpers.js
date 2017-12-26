const exposedProperties = ["window", "navigator", "document"];

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
var mockCssModules = require("mock-css-modules");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = jsdom;

const { document } = (new JSDOM("")).window;
global.document = document;
global.window = window;


global.navigator = {
  userAgent: "node.js"
};

Enzyme.configure({ adapter: new Adapter() });


mockCssModules.register(['.sass', '.scss', '.less']);