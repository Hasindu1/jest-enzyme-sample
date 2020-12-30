import React from 'react';
import Login from "../components/Login";

import { shallow, configure } from 'enzyme';

it('should render the login component',()=>{
const wrapper = shallow(<Login/>);
expect(shallow(<Login />).find('form.login').exists()).toBe(true)

});
describe('User name input', () => {
    it('User name entering should respond to change event and change the state of the Login Component', () =>
   {
    const wrapper = shallow(<Login />);
    wrapper.find('#userName').simulate('change', {target: {name: 'userName', value:
   'Hasindu'}});
    expect(wrapper.state('userName')).toEqual('HASINDU');
    })
   })
   describe('Password input', () => {
    it('Password entering should respond to change event and change the state of the Login Component', () =>
   {
    const wrapper = shallow(<Login />);
    wrapper.find('#password').simulate('change', {target: {name: 'password', value:
   'cats'}});
    expect(wrapper.state('password')).toEqual('CATS');
    })
   })
   describe('coverting to uppercase',()=>{
       const wrapper = shallow(<Login/>);
       expect(wrapper.instance().convertToUpperCase('Hasindu')).toEqual('HASINDU');
   })