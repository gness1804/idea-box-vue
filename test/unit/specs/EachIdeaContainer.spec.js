import Vue from 'vue';
import EachIdeaContainer from '@/components/EachIdeaContainer';

describe('EachIdeaContainer.vue', () => {
  const propsData = {
    idea: {
      id: 1,
      name: 'Drink a lot of soda',
      body: 'This leads to a lot of cavities. I am not so sure that this is such a good idea.',
      quality: 'Swill',
    },
  };

  it('should render correct contents', () => {
    const Constructor = Vue.extend(EachIdeaContainer);
    const vm = new Constructor({ propsData }).$mount();
    expect(vm.$el.querySelector('.each-idea-container .name').textContent)
      .to.equal('Drink a lot of soda');
    expect(vm.$el.querySelector('.each-idea-container .body').textContent)
      .to.equal('This leads to a lot of cavities. I am not so sure that this is such a good idea.');
    expect(vm.$el.querySelector('.each-idea-container .quality').textContent)
      .to.equal('Quality: Swill');
  });
});

