app.controller("SongCtrl", ["$q", "$http", "$scope", function($q, $http, $scope){


  $scope.songs;
    //get the data from the json file.  
    // the data has been bound to song-list.html by the app.config(route provider) in SongApp


  var getSongs = $q(function(resolve, reject) {
    console.log("call to first db");
      $http.get('./songs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        }
      );
    });

// returning the promise of the call to json, 
// if successful put the song object in $scope.songs to bind it to the DOM

  getSongs.then(function (songs) {
    console.log("songs",songs);
    $scope.songs = songs;
  }, function (error) {
    console.log("Failed");
    });

  // if the delete button is clicked call the deleteSong function to delete it
  // doesn't delete it but it does make it to the consoles message

  $scope.deleteSong = function(song) {
    console.log("I made it to the deleteSong function");
    // Do you see the PFM here of full object comparison?
    // var songIndex = $scope.songs.indexOf(song); 

    // if (songIndex >= 0) {
    //   $scope.todos.splice(songIndex, 1);
    // }
  };

 
}]);