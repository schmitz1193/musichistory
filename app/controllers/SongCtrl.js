app.controller("SongCtrl", ["$q", "$http", "$scope", "songStorage", function($q, $http, $scope, songStorage){


  $scope.songs;

      // Return the promise for controllers to listen to. This requires the following
      // code inside the controllers
      
      songStorage.loadSongs().then(
        function () {
          $scope.songs = songStorage.getSongs();
        },
        function (error) {
          console.log(error);
        }
      );

  // if the delete button is clicked call the deleteSong function to delete it
  // doesn't delete it but it does make it to the consoles message

  $scope.deleteSong = function(song) {
    console.log("I made it to the deleteSong function");
    console.log("song to delete ", song);
    songIndex = $scope.songs.indexOf(song); 
    // $scope.songs = songStorage.deleteSong(songIndex);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
      };
 
 
}]);