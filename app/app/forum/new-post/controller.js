import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNewPost(formdata) {
      const post = this.store.createRecord('post', {
        postType: 'forum',
        jsonData: {
          title: 'Hello',
          text: formdata.educationalBackground,
        }
      });

      post.save();

      // this.transitionToRoute('forum');
    },
  },
});
