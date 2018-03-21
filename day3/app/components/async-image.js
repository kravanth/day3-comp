import Ember from 'ember';
import Component from '@ember/component'; 

export default Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  
  init() {
    this._super(...arguments);
    
    if (Ember.testing) {
      this._loading = false;
      Ember.Test.registerWaiter(() => this._loading === false);
    }
  },
  
  load(src) {
    let promise = new Ember.RSVP.Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        Ember.run(() => resolve(img));
      };
      img.onerror = () => {
        Ember.run(() => reject());
      };
    });
    
    if (Ember.testing) {
        this._loading = true;
        return promise.finally(() => this._loading = false);
    }
    
    return promise;
  },
  
  loadImage() {
    let src= this.get('src');
    
    this.load(src).then(img => {
      this.get('onImageLoad')("image loaded", img.width);
    })
    .catch(error => {
      Ember.Logger.log('error', error);
      this.get('onImageLoad')("image could not load");
    });
  },

  didInsertElement() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, this.loadImage);
  }
});
