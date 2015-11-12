define(["jquery", "lodash"], 
	function($, lodash) {

	return {

//Use lodash to check for duplicate artists		
		deleteArtistDuplicates: function(array) {
			uniqueArtist = _.uniq(array,"artist");
			pluckArtist = _.pluck(uniqueArtist,"artist");
			console.log("pluckArtist ", pluckArtist);
			return pluckArtist;
		}

//Use lodash to check for duplicate artists		
		// deleteAlbumDuplicates: function(Array) {
		// 	uniqueAlbum = _.chain(Array).uniq("album").pluck("album").val();
		// 	console.log("uniqueAlbum ", uniqueAlbum);
		// 	return uniqueAlbum;
		// }

	};




});


// var matchingAlbums = _.chain(config.originalSongsArray)
//                       .filter((song) => song.artist === selectedArtist)
//                       .uniq('album.name')
//                       .pluck('album')
//                       .value();