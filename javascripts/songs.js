

define(["jquery", "hbs", "populate-songs", "get-more-songs"], function($, handlebars, populate, more) {


	var yellowList = [];
	var newLine = '';
	var moreButton = '';
	var listSong = $("#lineOne");
	var addSong = $("#new-song");
	var addArtist = $("#new-artist");
	var addAlbum = $("#new-album"); 

// NOTE to self:  do not need a return in this module!!!!!

 
//This function will add the info from the JSon file to the DOM (aka yellowbox)
//{Song name} by {Artist} on the album {Album}
	function addSongsToList(songLists) {
		require(["hbs!../templates/songs"], function(songTemplate) {
				$("#lineOne").append(songTemplate(songLists));
				moreButton = "<button class='more'>MORE</button>";
				$("#lineOne").append(moreButton);
				
		});
		//});
		// for (var i = 0; i < songLists.songs.length; i++) {
		//    	yellowList[i] = "<div class='songLists'>" + "<button class='delete'>Delete</button>" + "   " + songLists.songs[i].title + " by " + songLists.songs[i].artist + " on the album " + songLists.songs[i].album + "</div>";
		//     $("#lineOne").append(yellowList[i]);
		// }
		
		

	}

// Listen for the click on the Add Music nav and display input screen and hide blue & yellow box

		$("#add-music").click(function()  {
			$("#add-section").removeClass("hidden");
			$("#bluebox").hide();
			$("#yellowbox").hide();
		});

		$("#add-done").click(function() {
			$("#add-section").addClass("hidden");
			$("#bluebox").show();
			$("#yellowbox").show();	
		
			newLine = "<div class='songLists'>" + "<button class='delete'>Delete</button>" + "   " + addSong.val() + " by " + addArtist.val() + " on the album " + addAlbum.val() + "</div>";
			$(".songBox").append(newLine);
			addSong.val("");
			addArtist.val("");
			addAlbum.val("");
		});

//Calll get more songs to populate the song list 
//AJAX will get the songlist and then call a function to create the list in the yellow box
		populate.getData(addSongsToList);

//If you click on more, call AJAX again to get the second Json list of titles to append the yellow box
	 	$("body").on("click",".more", function(event) {
		 	more.getData(addSongsToList);
		 });

//When the delete button is clicked, remove the song associated with that button from the list		
		$("body").on('click', '.delete', function(event) {
// Delete div element including message and button 
// used this "event" log to go through object to find what it is associated with
			event.target.parentNode.remove();
		});

//curly bracket for return


//closing brackets //////////////////////////////////////////////////////////////////////////////////
});

