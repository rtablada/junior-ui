import DS from 'ember-data';
import fromNow from 'ember-moment/computeds/from-now';
import momentComputed from 'ember-moment/computeds/moment';

export default DS.Model.extend({
  postType: DS.attr('string'),
  jsonData: DS.attr(),
  tagsString: DS.attr(),
  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr(),
  createdAtFormatted: fromNow(momentComputed('createdAt')),
});
