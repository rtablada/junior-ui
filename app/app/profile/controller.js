import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateProfile(user, formValues) {
      user.get('profile').then((profile) => {
        profile.setProperties({...formValues, profileCompleted: true});
        profile.save();
      });
    },
    updateUser(user, formValues) {
    },
    updatePassword(user, formValues) {
    },
  },
});
