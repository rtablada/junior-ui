import { moduleFor, test } from 'ember-qunit';

moduleFor('route:app/stories', 'Unit | Route | app/stories', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
