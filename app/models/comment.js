import DS from 'ember-data';
import fromNow from 'ember-moment/computeds/from-now';
import moment from 'moment';
import Ember from 'ember';

export default DS.Model.extend({
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user'),
  markdown: DS.attr('string'),
  createdAt: DS.attr(),
  createdAtFormatted: fromNow(Ember.computed('createdAt', function () {
    return moment.utc(this.get('createdAt'));
  })),
});
