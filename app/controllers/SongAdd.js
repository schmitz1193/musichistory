app.controller("SongAdd", ["$q", "$http", "$scope", function($q, $http, $scope){

    $scope.newSong = { title: "", artist: "", album: ""};

    $scope.addSong = function() {
    	console.log("I am in addSong in SongAdd");
    //   $scope.songs.$add({
    //     title: $scope.newSong.title,
    //     artist: $scope.newSong.artist,
    //     album: $scope.newSong.album
    //   });
    };
 }]); 