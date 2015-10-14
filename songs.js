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

for (var i = 0; i < songs.length; i++) {
	testCheck = songs[i].indexOf(">");
	if (testCheck !== -1) {
//using index of > sign location slice it out, add a - and tack on the end.		
		sliceSign = songs[i].slice(0, testCheck) + "-" + songs[i].slice(testCheck +1);
//		console.log(sliceSign);
		songs[i] = sliceSign;
	}	
//using replace get rid of all other symbols --- check f symbols
	songs[i] = songs[i].replace(/!|@|\*|\(/g, "");
	console.log("Song array", songs[i]);		
//REMOVE ABOVE COMMENTS TO GET CORRECT REPLACE SYNTAX!!!!

	currentSong = songs[i];
	console.log("current song", currentSong);
	currentSong = "<div>" + currentSong;
	console.log("this is info song", currentSong);
	infoSong = infoSong + currentSong;

}

listSong.innerHTML = infoSong;






//Must add each string to the DOM in index.html in the main content area.
//{Song name} by {Artist} on the album {Album}