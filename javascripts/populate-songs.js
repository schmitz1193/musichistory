
define(["jquery"], function($) {

	return {

//NOTE to self:  review syntax for functions within returns!!!!!

		getData: function(returnSongs) {

	// this function passes a function as a parameter from songs.js 
	//AJAX will get the songlist and then return the function with the songlist data
	//in songs.js, the function is involkes and creates the list in the yellow box
			$.ajax({url: "data/songs.json"})
			.done(returnSongs);

		},
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
