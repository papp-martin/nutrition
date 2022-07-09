import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";
import React from "react";

it('expect to render CButton component', () => {
    expect(shallow(<CustomButton/>)).toMatchSnapshot();
});