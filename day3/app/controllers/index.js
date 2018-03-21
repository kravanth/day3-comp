// import Controller from '@ember/controller';

// export default Controller.extend({
//   pressCount: 0,

//   actions: {
//     buttonClick: function() {
//       console.log("buttonClick() @ contr >>> ",this.pressCount)	 ;
//       this.incrementProperty('pressCount');
//     }
//   }
// });



import Controller from '@ember/controller';

export default Controller.extend({
  appName:'Ember Comp',
  data: {
    a: [{a: 1}, {b: 2}, {c: 3}],
    b: "mytext"
  }
});