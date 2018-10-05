import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from "react-router-dom";
import { Header } from '../../containers/Header/Header';

describe('Test the header', () => {
    const props = {
        history: {
          push: () => {},
        },
      };
    const parent_wrapper = mount(<BrowserRouter><Header {...props}/></BrowserRouter>);
    const wrapper = parent_wrapper.find(Header);

	it("calls logout", () => {
        const spy = jest.spyOn(wrapper.instance(), "Logout");
        wrapper.instance().forceUpdate();
        const input = wrapper.find('NavLink[name="logout"]');
        input.simulate("click");
        expect(spy).toHaveBeenCalled();
      });
    
});