import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNewPost() {
      this.transitionToRoute('forum');
    },
  },
});
