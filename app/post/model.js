import DS from 'ember-data';

export default DS.Model.extend({
  postType: DS.attr('string'),
  jsonData: DS.attr(),
  comments: DS.hasMany('comment'),
  user: DS.belongsTo('user'),
});
