import React from 'react';
import { shallow } from 'enzyme';
import AdminRequest from '../../components/AdminRequest';

describe('Test the request component', () => {
	it('<AdminRequest />', () => {
		const wrapper = shallow(<AdminRequest />);
		const Element = wrapper.find('div');
		expect(Element).toHaveLength(1);
    });
    
    it('<AdminRequest />', () => {
		const wrapper = shallow(<AdminRequest status="pending"/>);
		const Element = wrapper.find('div');
		expect(Element).toHaveLength(1);
	});
    
});