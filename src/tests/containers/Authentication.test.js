import React from "react";
import { mount } from "enzyme";
import { Authentication } from "../../containers/Authentication/Authentication";

describe("Test user authentication", () => {
    const props = {
        history: {
          push: () => {},
        },
      };

      const wrapper = mount(<Authentication {...props}/>);

  it("calls eventListener", () => {
    const spy = jest.spyOn(wrapper.instance(), "eventListener");
    wrapper.instance().forceUpdate();
    const input = wrapper.find('form').at(0).find('input').at(0);
    input.simulate("change", { target: { value: "some email", name: "email" } });
    expect(spy).toHaveBeenCalled();
  });

  it("calls switchDisplay", () => {
    const spy = jest.spyOn(wrapper.instance(), "switchDisplay");
    wrapper.instance().forceUpdate();
    const formtab = wrapper.find('a[name="signup"]');
    formtab.simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("calls switchDisplay", () => {
    const spy = jest.spyOn(wrapper.instance(), "switchDisplay");
    wrapper.instance().forceUpdate();
    const formtab = wrapper.find('a[name="login"]');
    formtab.simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("calls submitsignup", () => {
    const props = {
        signup_message:true,
        history: {
            push: () => {},
          }
      }
      const wrapper = mount(<Authentication {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), "submitSignup");
    wrapper.instance().forceUpdate();
    const form = wrapper.find('form[name="signupForm"]');
    form.simulate("submit");
    expect(spy).toHaveBeenCalled();
  });

  it("calls submitlogin", () => {
      const props = {
        history: {
            push: () => {},
          },
          login_message:true
      }
    const wrapper = mount(<Authentication {...props}/>);
    const spy = jest.spyOn(wrapper.instance(), "submitLogin");
    wrapper.instance().forceUpdate();
    const form = wrapper.find('form[name="loginForm"]');
    form.simulate("submit");
    expect(spy).toHaveBeenCalled();
  });
  
});
