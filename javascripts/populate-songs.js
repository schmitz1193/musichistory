
define(["jquery", "add-songs"], function($, add) {

	return {

//NOTE to self:  review syntax for functions within returns!!!!!

		getData: function() {


	//AJAX will get the songlist and then invoke the function to add the  songlist data to the yellow box
			$.ajax({url: "https://burning-inferno-2252.firebaseio.com/songs/.json"})
			.done(add.addSongsToList);
		}
	};
});



//Review on functions with James!!!!!

// doMath: function (numA, numB, mathFunction) {
// 	return mathFunction(numA, numB);
// }

// returnSongs = function (paramenter) {
// 	//does stuff
// }


//EXAMPLE FOR Passing a Function
// var add = function (num1, num2) {
// 	return num1 + num2
// }


// populate_songs.doMath(3, 4, add) 
