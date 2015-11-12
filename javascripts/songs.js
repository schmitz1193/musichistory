

define(["jquery", "lodash", "hbs", "populate-songs",  "format-songs", "add-more", "filter", "delete-songs", "duplicate-songs"], 
	function($, lodash, handlebars, populate, format, addMore, filter, deleteSongs, noDuplicates) {

	var yellowList = [];
	var newLine = '';
	var moreButton = '';
	var listSong = $("#lineOne");
	var addSong = $("#new-song");
	var addArtist = $("#new-artist");
	var addAlbum = $("#new-album"); 
	var selection = '';

//Call function that uses AJAX to get data from my API to populate the song list 
//AJAX will get the songlist and then call a function to create the list in the yellow box
		populate.getData(format.formatLists);

// Listen for the click on the Add Music nav and display input screen and hide blue & yellow box
		$("#add-music").click(function()  {
			$("#add-section").removeClass("hidden");
			$("#bluebox").hide();
			$("#yellowbox").hide();
		});

//when the user has completed the add entry, listen for that click, hide the add screen and display
//the yellow and blue boxes.
		$("#add-done").click(function() {
//if no data is entered, alert the user that all fields are required
			if ((addSong.val() === "") || (addArtist.val() === "") || (addAlbum.val() === "")) {
				alert("All input fields are required");
			}
			else {
				$("#add-section").addClass("hidden");
				$("#bluebox").show();
				$("#yellowbox").show();	
			
//Call addMore to invoke function that adds the input data via an AJAX call to the API
				addMore.addData();

				populate.getData(format.formatLists);
 			}   //end of else
//blank out input values so the input boxes are cleared
			addSong.val("");
			addArtist.val("");
			addAlbum.val("");
		});


//When the delete button is clicked, remove the song associated with that button from the list		
		$("body").on('click', '.delete', function(event) {
			console.log("event.target.parentNode ", event.target.parentNode);
			deleteKey = $(this).attr("id");
			console.log("deleteKey ", deleteKey);
			deleteSongs.deleteData(deleteKey);
// Delete div element including message and button 
// used this "event" log to go through object to find what it is associated with
			event.target.parentNode.remove();
		});


//closing brackets //////////////////////////////////////////////////////////////////////////////////
});

