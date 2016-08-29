import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel() {
    this.transitionTo('index').then(() => {
      this.get('session').invalidate();
    });
  },
});
