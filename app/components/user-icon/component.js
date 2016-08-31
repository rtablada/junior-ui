import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  user: null,

  didReceiveAttrs() {
    const letter = this.get('user.firstName') ? this.get('user.firstName')[0] : null;

    this.set('color', this.get('user.id') % 3);
    this.set('letter', letter);
  },
});
