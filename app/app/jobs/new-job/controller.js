import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNewJob(formdata, reset) {
      const post = this.store.createRecord('post', {
        postType: 'job',
        jsonData: formdata,
      });

      post.save().then(() => {
        reset();
        this.transitionToRoute('app.jobs.index');
      });
    },
  },
});
