import Ember from 'ember';

export default Ember.Component.extend({
  imageLoaded: 'image loading',
  imageWidth: 'width loading',
  
  // purely to make sure image loads each time and
  // is not cached for testing
  volatileSrc: Ember.computed('src', function(){
    return this.get('src') + '?cache=' + new Date().toISOString();
  }),
  
  actions: {
    imageLoaded(message, width) {
      if (!this.isDestroyed) {
        this.set('imageLoaded', message);
        this.set('imageWidth', width);
      }
    }
  }
});
