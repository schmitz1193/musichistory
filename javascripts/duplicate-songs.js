define(["jquery", "lodash"], 
	function($, lodash) {

	return {

//Use lodash to check for duplicate artists		
		deleteArtistDuplicates: function(array) {
			uniqueArtist = _.uniq(array,"artist");
			pluckArtist = _.pluck(uniqueArtist,"artist");
			console.log("pluckArtist ", pluckArtist);
			return pluckArtist;
		},

//Use lodash to check for duplicate artists		
		deleteAlbumDuplicates: function(array) {
			uniqueAlbum = _.uniq(array,"album");
			pluckAlbum = _.pluck(uniqueAlbum,"album");
			console.log("pluckAlbum ", pluckAlbum);
			return pluckAlbum;
		}

	};


});

//Steve's code
// var matchingAlbums = _.chain(config.originalSongsArray)
//                       .filter((song) => song.artist === selectedArtist)
//                       .uniq('album.name')
//                       .pluck('album')
//                       .value();