var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//add song to beginning of song array
songs.unshift("With a Little Help from my Friends > by the Joe Cocker on the album With a Little Help from my Friends");


//add song to end of song arrayß	
songs.push("Rehab > by Amy Winehouse on the album Back to Back");

//Loop over the array and remove any words or characters that obviously don't belong.

//Students must find and replace the > character in each item with a - character.
var testCheck = 0;
var sliceSign = '';
var sliceAllOthers = '';

var listSong = document.getElementById("lineOne");

var currentSong = "";

var infoSong = "";

var addSong = document.getElementById("new-song");
var addArtist = document.getElementById("new-artist");
var addAlbum = document.getElementById("new-album");
 
var addMusic = document.getElementById("add-music");


// Listen for the click on the Add Music nav and display input scrren and hide blue & yellow box

addMusic.addEventListener("click", function() {
	document.getElementById("add-section").classList.remove("hidden");
	document.getElementById("bluebox").classList.add("hidden");
	document.getElementById("yellowbox").classList.add("hidden");
})

document.getElementById("add-done").addEventListener("click", function() {
	document.getElementById("add-section").classList.add("hidden");
	document.getElementById("bluebox").classList.remove("hidden");
	document.getElementById("yellowbox").classList.remove("hidden");
	listSong.innerHTML += "<div class='songLists'>" + addSong.value + " by " + addArtist.value + " on the album " + addAlbum.value + "</div>";
});

console.log("look at song? ", songs);

for (var i = 0; i < songs.length; i++) {
	testCheck = songs[i].indexOf(">");
	if (testCheck !== -1) {
//using index of > sign location slice it out, add a - and tack on the end.		
		sliceSign = songs[i].slice(0, testCheck) + "-" + songs[i].slice(testCheck +1);
		songs[i] = sliceSign;
	}	
//using replace get rid of all other symbols --- check f symbols
	songs[i] = songs[i].replace(/!|@|\*|\(/g, "");
		
//Must add each string to the DOM in index.html in the main content area.
//{Song name} by {Artist} on the album {Album}

	currentSong = songs[i];
	currentSong = "<div class='songLists'>" + currentSong + "</div>";
	
	infoSong = infoSong + currentSong;

}

console.log("div with added song", listSong.innerHTML);

listSong.innerHTML = infoSong;



