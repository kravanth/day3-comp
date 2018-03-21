
import Component from '@ember/component';

export default Component.extend({
  classNames: 'button-wrapper',
  actions: {
    buttonClick: function() {
      console.log("buttonClick() @ press-button")	 ;	
      this.sendAction();
    }
  }
});