

define(["jquery", "hbs", "populate-songs", "get-more-songs", "add-songs", "add-more"], function($, handlebars, populate, more, add, addMore) {

	var yellowList = [];
	var newLine = '';
	var requireInput = "";
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
			if ((addSong.val() === "") || (addArtist.val() === "") || (addAlbum.val() === "")) {
				console.log("I am here!!!");
				alert("All input fields are required");
			}
			else {

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

//Call addMore to invoke function that adds the input data via an AJAX call to the API
			addMore.addData();

//Call add to invoke function that displays the input data in the songlist 
//			add.addSongsToList(newLine);
		
			addSong.val("");
			addArtist.val("");
			addAlbum.val("");
			
			}	
		});

//Call function that uses AJAX to get data from my API to populate the song list 
//AJAX will get the songlist and then call a function to create the list in the yellow box
		populate.getData();

//When the delete button is clicked, remove the song associated with that button from the list		
		$("body").on('click', '.delete', function(event) {
// Delete div element including message and button 
// used this "event" log to go through object to find what it is associated with
			event.target.parentNode.remove();
		});
//closing brackets //////////////////////////////////////////////////////////////////////////////////
});

