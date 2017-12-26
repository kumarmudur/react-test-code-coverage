const exposedProperties = ["window", "navigator", "document"];

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = jsdom;

const { document } = (new JSDOM("")).window;
global.document = document;
global.window = window;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === "undefined") {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: "node.js"
};
