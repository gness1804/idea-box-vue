import Vue from 'vue';
import Landing from '@/components/Landing';

describe('Landing.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Landing);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.landing h2').textContent)
      .to.equal('Enter a new idea');
  });

  it('should render the no ideas text by default', () => {
    const Constructor = Vue.extend(Landing);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.landing .no-ideas-text').textContent)
      .to.equal('No ideas yet. Please enter one now!');
  });
});
