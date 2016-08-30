import Ember from 'ember';

export default Ember.Route.extend({
  model({ search_term }) {
    return this.store.query('post', {
      'filter-json': {
        q: search_term,
      },
    });
  },
});
