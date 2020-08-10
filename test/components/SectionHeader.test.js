import { mount } from '@vue/test-utils';
import SectionHeader from '~/components/layout/SectionHeader.vue';

describe('SectionHeader', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(SectionHeader, { propsData: { title: 'Foo' } });
    expect(wrapper.vm).toBeTruthy();
    const heading = wrapper.find('h2');

    expect(heading).exists().toBe(true);
  });
});
