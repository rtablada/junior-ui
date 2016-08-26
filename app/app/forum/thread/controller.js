import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addComment() {
      this.transitionToRoute('forum');
    },
  },
});
