import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    this.transitionTo('login').then(() => {
      this.get('session').invalidate();
    });
  },
});
