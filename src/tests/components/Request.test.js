import React from 'react';
import { shallow } from 'enzyme';
import Request from '../../components/Request';

describe('Test the request component', () => {
	it('<Request />', () => {
		const wrapper = shallow(<Request />);
		const Element = wrapper.find('div');
		expect(Element).toHaveLength(1);
	});
    
});