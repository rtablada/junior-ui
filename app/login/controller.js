import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    login(formValues) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator,
      { identification: formValues.username, password: formValues.password });
      this.transitionToRoute('forum');
    },
  },
});
