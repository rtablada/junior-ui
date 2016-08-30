import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(formValues) {
      this.transitionToRoute('app.search', formValues.query);
    },
  },
});
