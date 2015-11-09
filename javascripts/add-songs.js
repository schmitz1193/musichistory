

define(["jquery", "hbs"], function($, handlebars) {

	return {

//NOTE to self:  review syntax for functions within returns!!!!!

//This function will add the info from the JSon file to the DOM (aka yellowbox)
//{Song name} by {Artist} on the album {Album}
	addSongsToList: function(songLists) {
		require(["hbs!../templates/songs"], function(songTemplate) {
				$("#lineOne").append(songTemplate(songLists));
		});     //first require
		require(["hbs!../templates/artists"], function(songTemplate) {
			$("#artist-opt").append(songTemplate(songLists));
		});
		require(["hbs!../templates/albums"], function(songTemplate) {
			$("#album-opt").append(songTemplate(songLists));
				console.log("songLists", songLists);
		});

	},

	};
});