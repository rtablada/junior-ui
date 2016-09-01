import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  session: Ember.inject.service(),
  actions: {
    deleteComment(comment) {
      comment.destroyRecord();
    },
  },
});
