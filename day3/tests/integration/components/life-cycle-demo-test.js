import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('life-cycle-demo', 'Integration | Component | life cycle demo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{life-cycle-demo}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#life-cycle-demo}}
      template block text
    {{/life-cycle-demo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
