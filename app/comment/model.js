import DS from 'ember-data';
import fromNow from 'ember-moment/computeds/from-now';
import momentComputed from 'ember-moment/computeds/moment';

export default DS.Model.extend({
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user'),
  markdown: DS.attr('string'),
  createdAt: DS.attr(),
  createdAtFormatted: fromNow(momentComputed('createdAt')),
});
