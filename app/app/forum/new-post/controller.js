import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNewPost(formdata) {
      const post = this.store.createRecord('post', {
        postType: 'forum',
        jsonData: formdata,
      });

      post.save().then(() => {
        this.transitionToRoute('app.forum');
      });
    },
  },
});
