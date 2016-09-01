import DS from 'ember-data';

export default DS.Model.extend({
  post: DS.belongsTo('post'),
  user: DS.belongsTo('user'),
  markdown: DS.attr('string'),
  createdAt: DS.attr(),
  createdAtFormatted: fromNow(momentComputed('createdAt')),
});
