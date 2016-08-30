import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  user: null,

  didReceiveAttrs() {
    this.set('color', this.get('user.id') % 10);
    this.set('letter', this.get('user.firstName')[0]);
  },
});
