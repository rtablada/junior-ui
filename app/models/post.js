import DS from 'ember-data';
import fromNow from 'ember-moment/computeds/from-now';
import moment from 'moment';
import Ember from 'ember';

export default DS.Model.extend({
  postType: DS.attr('string'),
  jsonData: DS.attr(),
  tagsString: DS.attr(),
  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr(),
  createdAtFormatted: fromNow(Ember.computed('createdAt', function () {
    return moment.utc(this.get('createdAt'));
  })),
  tags: DS.hasMany('tag'),
});
