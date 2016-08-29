import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNewResource(formdata, reset) {
      const post = this.store.createRecord('post', {
        postType: 'resource',
        jsonData: formdata,
      });

      post.save().then(() => {
        alert('done');
        reset();
        this.transitionToRoute('app.resources.index');
      });
    },
  },
});
