app.factory("songStorage", 
["$q", "$http",
function($q, $http) {

  var song_list;

  function loadSongs () {
    return $q(function(resolve, reject) {
        console.log("db call");
        $http.get('./songs.json')
        .success(
          function(objectFromJSONFile) {
            /* 
            Convert Firebase's object of objects into an array of objects, and store it in the private variable
            */
            song_list = Object.keys(objectFromJSONFile.songs).map(song => objectFromJSONFile.songs[song]);
            resolve(song_list);
          }, function(error) {
            console.log("THIS WAS AN ERROR!");
            reject(error);
          }
        );
      }); 
  }

  // Store the promise as a private variable
  var songPromise = loadSongs();

  return {
    loadSongs: function () {

      // Return the promise for controllers to listen to. 
 
      return songPromise;
    },
    getSongs: function() {
      console.log("Factory returning all songs");
      return song_list;
    },
    // this function is currently not being invoked from anywhere
    getSong: function(name) {
      console.log("Factory returning single song");
      return song_list.filter(function(song){
        return song.name === name;
      })[0];
    },
    addSong: function(song) {
      console.log("Added single song to factory");
      console.log(song);
      song_list.push(song);
      return song_list;
    }
  }
}]);