import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('forgot');
  this.route('app', function() {
    this.route('forum', function() {
      this.route('thread', {
        path: ':post_id'
      });
      this.route('new-post');
    });
    this.route('jobs', function() {
      this.route('new-job');
    });
    this.route('profile');
    this.route('resources', function() {
      this.route('thread', {
        path: ':post_id'
      });
      this.route('new-resource');
    });
  })
  this.route('interviews');
  this.route('brand');
});

export default Router;
