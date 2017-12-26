import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import Avatar from "../app/Avatar";

const props = {
    checked: true,
    elementClass: 'red-square',
    text: 'Enzyme rocks'
};

const wrapper = mount(<Avatar { ...props }/>);
console.log('avatar component: ', wrapper.debug());

describe('a passing test', () => {
    it('should pass', () => {
      expect(true).to.be.true;
    });
});

describe("Component: Avatar", () => {
    it("should have class name", () => {
        expect(wrapper.find(".avatar_name")).to.have.length(1);
    })
});

