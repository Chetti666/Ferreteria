import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import LoginComp from '@/components/LoginComp.vue';

describe('LoginComp', () => {
  it('should render login form', () => {
    const wrapper = mount(LoginComp);
    expect(wrapper.find('form').exists()).to.be.true;
  });

  it('should have an email input field', () => {
    const wrapper = mount(LoginComp);
    expect(wrapper.find('input[type="email"]').exists()).to.be.true;
  });
});
