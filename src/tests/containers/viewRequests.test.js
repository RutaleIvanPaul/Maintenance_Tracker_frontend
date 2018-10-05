import React from "react";
import { mount } from "enzyme";
import { ViewRequests } from "../../containers/Requests/ViewRequests";

describe("Test view requests", () => {
    const props = {
        history: {
          push: () => {},
        },
        requests:[]
      };

      const wrapper = mount(<ViewRequests {...props}/>);

  it("calls eventListener", () => {
    const spy = jest.spyOn(wrapper.instance(), "eventListener");
    wrapper.instance().forceUpdate();
    const editform = wrapper.find('input[name="title"]');
    editform.simulate("change", { target: { value: "some email", name: "email" } });
    expect(spy).toHaveBeenCalled();
  });


});
