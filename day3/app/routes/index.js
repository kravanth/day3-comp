import Route from '@ember/routing/route';

export default Route.extend({
	model: function() {
		return {
            name:"Bhasker",
            avatar:"https://imgur.com/I80W1Q0.png",
            bio:"JPMC "
        };
	}
});