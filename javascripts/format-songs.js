

define(["jquery", "hbs", "duplicate-songs"], 
	function($, handlebars, duplicates) {

	return {

//NOTE to self:  review syntax for functions within returns!!!!!

//This function will add the info from the JSon file to the DOM (aka yellowbox)
//{Song name} by {Artist} on the album {Album}
	formatLists: function(songLists) {

		songArray = $.map(songLists, function(event) {
			return event;
		});
			console.log("songArray ", songArray);

		var uniqueArtist = duplicates.deleteArtistDuplicates(songArray);
		var uniqueAlbum = duplicates.deleteAlbumDuplicates(songArray);

		require(["hbs!../templates/songs"], function(songTemplate) {
			$("#lineOne").html(songTemplate(songLists));
		});     //first require
		require(["hbs!../templates/artists"], function(songTemplate) {
			$("#artist-opt").html(songTemplate(uniqueArtist));
		});
		require(["hbs!../templates/albums"], function(songTemplate) {
			$("#album-opt").html(songTemplate(uniqueAlbum));
		});
	},

	};
});
