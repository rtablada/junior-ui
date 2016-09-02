import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  user: null,

  didReceiveAttrs() {
    const letter = this.get('user.firstName') ? this.get('user.firstName')[0] : null;

    if (letter) {
      this.set('letter', letter.toUpperCase());
    }

    this.set('color', this.get('user.id') % 3);
  },
});
