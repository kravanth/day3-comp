import Component from '@ember/component';

export default Component.extend({
	classNames: 'press-button',
		actions: {
			buttonClick: function() {
				console.log("buttonClick() @ button-wrapper")	 ;	
				this.sendAction();
			}
  }
});