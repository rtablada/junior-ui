import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleColor() {
      const red = document.querySelector('.red');
      red.classList.toggle('black');
    },
  },
});
