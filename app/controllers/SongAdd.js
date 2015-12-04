app.controller("SongAdd", ["$q", "$http", "$scope", "songStorage", function($q, $http, $scope, songStorage){

    $scope.newSong = { title: "", artist: "", album: ""};

    
    $scope.nowAdd = function() {
    	console.log("I am in nowAdd in SongAdd");
    
		songStorage.loadSongs().then(
			function () {
			  songToAdd = {title: $scope.newSong.title,
						 artist: $scope.newSong.artist,
						 album: $scope.newSong.album};
		      $scope.songs = songStorage.addSong(songToAdd);
		    },
		    function (error) {
		      console.log(error);
		    }
		);
    };
 

 }]); 