import DS from 'ember-data';
import config from 'junior-ui/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
});
