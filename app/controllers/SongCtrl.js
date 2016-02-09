app.controller("SongCtrl", ["$q", "$http", "$scope", "$firebaseArray",
  function($q, $http, $scope, $firebaseArray){

  var ref = new Firebase("https://burning-inferno-2252.firebaseio.com/songs/");

  // download the data into a local object by making a reference and use this sytax
  // similar to snapshot.val
  // controls the partial song-form.html
  
  $scope.songs;
  
  $scope.songs = $firebaseArray(ref);

  // Make sure you use the $loaded promise handler, which waits
  // for all songs to be loaded from the reference before you try
  // to grab the record the user wanted.

    // $scope.songs.$loaded()
    //   .then(function() {
    //   // The $getRecord method on a $firebaseArray is very useful
    //     $scope.selectedSong = $scope.songs.$getRecord($scope.songId);
    //   })
    //   .catch(function(error) {
    //     console.log("Error:", error);
    //   });
 
  // if the delete button is clicked call the deleteSong function to delete it
  // doesn't delete it but it does make it to the consoles message

  $scope.deleteSong = function(song) {
    console.log("I made it to the deleteSong function");
    console.log("song to delete ", song);
    $scope.songs.$remove(song);
  };

}]);