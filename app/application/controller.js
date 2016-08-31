import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    toggleNav() {
      const ham = document.querySelector(".sub__nav");
      ham.classList.toggle('sub__nav--off')
    },
    invalidateSession() {
      this.get('session').invalidate();
      // this.transitionToRoute('index');
    },
    search(formValues) {
      this.transitionToRoute('app.search', formValues.query);
    },
  },
});
