import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    addComment(post, {
      markdown
    }, reset) {
      const comment = this.store.createRecord('comment', {
        post,
        markdown,
      });
      comment.save().then(() => {
        reset();
      });
    },
    deleteComment(comment) {
      comment.destroyRecord();
    },
    deletePost(post) {
      post.destroyRecord().then(() => {
        this.transitionToRoute('app.resources.index');
      });
    },
  },
});
