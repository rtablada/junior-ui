import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    login(formValues) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator,
      { identification: formValues.username, password: formValues.password })
      .then(() => {
          this.get('flashMessages').success('Welcome back Peter!');
          this.transitionToRoute('app.forum');
        });
    },
  },
});
