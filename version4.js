var song = getElementByID("song");
var artist = getElementByID("artist");
var album = getElementsByID("album"):
 
var enter = getElementByID("enter");

var newSongs = "";

enter.addEventListener("click", function() {
	newSongs = song + " by " + artist + " on the album " + album;
})