

define(["jquery", "hbs", "populate-songs", "get-more-songs", "add-songs"], function($, handlebars, populate, more, add) {

	var yellowList = [];
	var newLine = '';
	var moreButton = '';
	var listSong = $("#lineOne");
	var addSong = $("#new-song");
	var addArtist = $("#new-artist");
	var addAlbum = $("#new-album"); 

// Listen for the click on the Add Music nav and display input screen and hide blue & yellow box
		$("#add-music").click(function()  {
			$("#add-section").removeClass("hidden");
			$("#bluebox").hide();
			$("#yellowbox").hide();
		});

//when the user has completed the add entry, listen for that click, hide the add screen and display
//the yellow and blue boxes.
		$("#add-done").click(function() {
			$("#add-section").addClass("hidden");
			$("#bluebox").show();
			$("#yellowbox").show();	

			var newLine = {
				"songs": [
					{
					"title": addSong.val(),
	     			"artist": addArtist.val(),
	    			"album": addAlbum.val()
					}
				]
			};
			add.addSongsToList(newLine);
		
//			newLine = "<div class='songLists'>" + "<button class='delete'>Delete</button>" + "   " + addSong.val() + " by " + addArtist.val() + " on the album " + addAlbum.val() + "</div>";
//			$(".songBox").append(newLine);
			addSong.val("");
			addArtist.val("");
			addAlbum.val("");
		});

//Calll get more songs to populate the song list 
//AJAX will get the songlist and then call a function to create the list in the yellow box
		populate.getData();

//If you click on more, call AJAX again to get the second Json list of titles to append the yellow box
	 	 $("body").on("click",".more", function(event) {
		  	more.getData();
		  });

//When the delete button is clicked, remove the song associated with that button from the list		
		$("body").on('click', '.delete', function(event) {
// Delete div element including message and button 
// used this "event" log to go through object to find what it is associated with
			event.target.parentNode.remove();
		});
//closing brackets //////////////////////////////////////////////////////////////////////////////////
});

