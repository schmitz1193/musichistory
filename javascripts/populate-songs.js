
define(["jquery"], function($) {

	return {

//NOTE to self:  review syntax for functions within returns!!!!!

		getData: function(returnSongs) {

	// this function passes a function as a parameter from songs.js 
	//AJAX will get the songlist and then return the function with the songlist data
	//in songs.js, the function is involkes and creates the list in the yellow box
			$.ajax({url: "data/songs.json"})
			.done(function(songLists) {
				console.log("songLists ", songLists);
				returnSongs(songLists);
			});

		}

	};


});