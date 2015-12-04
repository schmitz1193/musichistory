var app = angular.module("SongApp", ['ngRoute']);

// through the $routeProvider, when the app config "hears" songs/list -from the href link in index.html
// it uses the song-list.html partial through SongCtrl to display the songs


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongCtrl'
      }).
      when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'SongAdd'
      }).
      when('/artist/list', {
        templateUrl: 'partials/artist.html',
        controller: 'SongCtrl'
      }).
      when('/album/list', {
        templateUrl: 'partials/album.html',
        controller: 'SongCtrl'
      });
  }]);

app.controller("appCtrl", ["$q", "$http", "$scope", function($q, $http, $scope) {



//closing brackets for Angular
  }]);