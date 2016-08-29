import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNewPost(formdata, reset) {
      const post = this.store.createRecord('post', {
        postType: 'forum',
        jsonData: formdata,
      });

      post.save().then(() => {
        alert('done');
        reset();
        this.transitionToRoute('app.forum.index');
      });
    },
  },
});
