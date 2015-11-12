
define(["jquery"], function($) {

	return {

//NOTE to self:  review syntax for functions within returns!!!!!

		getData: function(callback) {


	//AJAX will get the songlist and then invoke the function to add the  songlist data to the yellow box
			$.ajax({url: "https://burning-inferno-2252.firebaseio.com/songs/.json"})
			.done(callback);
		}
	};
});

