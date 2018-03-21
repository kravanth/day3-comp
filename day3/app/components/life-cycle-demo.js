import Component from '@ember/component'; 

export default Component.extend({
  init() {
    this._super(...arguments);
    console.log('init');
  },

  didUpdateAttrs() {
    this._super(...arguments);
    console.log('didUpdateAttrs');
  },

  willUpdate:function() {
    this._super(...arguments);
    console.log('willUpdate');
  },

  didReceiveAttrs() {
    this._super(...arguments);
    console.log('didReceiveAttrs');
  },

  willRender() {
    this._super(...arguments);
    console.log('willRender');
  },

  didRender() {
    this._super(...arguments);
    console.log('didRender');
  },

  didInsertElement() {
    this._super(...arguments);
    console.log('didInsertElement');
  },

  didUpdate() {
    this._super(...arguments);
    console.log('didUpdate');
  },
});

