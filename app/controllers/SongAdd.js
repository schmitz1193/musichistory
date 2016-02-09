app.controller("SongAdd", ["$q", "$http", "$scope", "$firebaseArray", 
	function($q, $http, $scope, $firebaseArray){

	var ref = new Firebase("https://burning-inferno-2252.firebaseio.com/songs/");
    $scope.songs = $firebaseArray(ref);
    $scope.newSong = {};

    // This controls the partial song-form.html 

    // when the user clicks on the add button, the addSong function is called to add the song
    $scope.addSong = function() {
    	console.log("I am in addSong in SongAdd");
    	$scope.songs.$add({
	  			title: $scope.newSong.title,
				artist: $scope.newSong.artist,
				album: $scope.newSong.album
	    		});
    };
 
 }]); 