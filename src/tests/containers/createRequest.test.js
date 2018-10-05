import React from "react";
import { mount } from "enzyme";
import { CreateRequest } from "../../containers/Requests/CreateRequest";

describe("Test user authentication", () => {
    const props = {
        history: {
          push: () => {},
        },
      };

      const wrapper = mount(<CreateRequest {...props}/>);

  it("calls eventListener", () => {
    const spy = jest.spyOn(wrapper.instance(), "eventListener");
    wrapper.instance().forceUpdate();
    const input = wrapper.find('input[name="title"]');
    input.simulate("change", { target: { value: "some email", name: "email" } });
    expect(spy).toHaveBeenCalled();
  });
  
  it("calls submitRequest", () => {
    const spy = jest.spyOn(wrapper.instance(), "submitRequest");
    wrapper.instance().forceUpdate();
    const input = wrapper.find('form');
    input.simulate("submit");
    expect(spy).toHaveBeenCalled();
  });


});
