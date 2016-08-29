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
          this.get('flashMessages').success('Login Success!');
          this.transitionToRoute('app.forum');
        })
        .catch((reason) => {
          this.get('flashMessages').danger('Login attempt failed. Did you enter the correct email and password?');
          console.log(reason);
        })
    },
  },
});
