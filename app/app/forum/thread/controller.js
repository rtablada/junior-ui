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
      this.get('flashMessages').add({
        message: 'Are you sure you want to delete this thread?',
        type: 'alpaca',
        timeout: 500,
        priority: 200,
        sticky: true,
        showProgress: true,
        extendedTimeout: 500,
        destroyOnClick: true,
      });
      post.destroyRecord().then(() => {
      this.transitionToRoute('app.forum.index');
      });
    },

  },
});
