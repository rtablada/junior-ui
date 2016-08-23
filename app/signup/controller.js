import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    signUp(formValues) {
      // const authenticator = 'authenticator:application';
      //
      // this.get('session').authenticate(authenticator, {
      //   identification: formValues.email,
      //   password: formValues.password
      // });
      const user = this.store.createRecord('user', formValues);
      user.save().then(() => {
        this.transitionToRoute('forum');
      });
    },
  },
});
