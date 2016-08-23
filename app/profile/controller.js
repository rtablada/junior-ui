import Ember from 'ember';

export default Ember.Controller.extend({
      actions: {
        update(formValues) {

          this.transitionToRoute('forum');
        },
      },
      });
