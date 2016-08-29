import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addComment(post, {markdown}, reset) {
      const comment = this.store.createRecord('comment', {
        post,
        markdown,
      });

      comment.save().then(() => {
        alert('done');
        reset();
      });
    },
    deleteComment(comment) {
      comment.destroyRecord();
    },
  },
});
