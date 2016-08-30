import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forum-collection-item', 'Integration | Component | forum collection item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{forum-collection-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#forum-collection-item}}
      template block text
    {{/forum-collection-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
