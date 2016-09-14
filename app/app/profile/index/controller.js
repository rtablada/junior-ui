import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateProfile(user, formValues) {
      user.get('profile').then((profile) => {
        profile.setProperties({...formValues,
          profileCompleted: true
        });
        return profile.save();
      });
    },
    updateUser(user, formValues) {
      user.get('profile').then((profile) => {
        debugger;
        profile.setProperties({...formValues,
          profileCompleted: true
        });
        return profile.save();
      });
    },
    updatePassword(user, formValues) {
      user.get('profile').then((profile) => {
        profile.setProperties({...formValues,
          profileCompleted: true
        });
        return profile.save();
      });
    },
  },
});
