import { shallow } from "enzyme";
import React from "react";
import SummaryProductForTest from './summary-productForTest.component';


let wrapper;
beforeEach(() => {
    const mockProps = {
        summationProduct: {},
        clearProduct: jest.fn(),
        quantityChanging: jest.fn()
    }

    wrapper = shallow(<SummaryProductForTest {...mockProps} />)
})

it('renders SummaryProductForTest without error', () => {
    expect(wrapper).toMatchSnapshot();
})

it('handleChange method checking', () => {
    wrapper.find("[id='gramm-input']").simulate('change', { target: { value: '100' } });
    expect(wrapper.state()).toEqual({ quantity: 100 });
})
