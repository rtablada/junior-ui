import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    console.log(this.get('session.currentUser.email'));
    return this.get('session.currentUser');
  },
});
