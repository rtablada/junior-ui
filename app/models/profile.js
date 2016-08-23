import DS from 'ember-data';

export default DS.Model.extend({
  profilePicture: DS.attr('string'),
  jobStatus: DS.attr('string'),
  experience: DS.attr('string'),
  educationalBackground: DS.attr('string'),
  profileCompleted: DS.attr('boolean'),
  user: DS.belongsTo('user'),
});
