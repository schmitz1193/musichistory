

define(["jquery", "hbs", "populate-songs", "get-more-songs", "add-songs", "add-more"], function($, handlebars, populate, more, add, addMore) {

	var yellowList = [];
	var newLine = '';
	var moreButton = '';
	var listSong = $("#lineOne");
	var addSong = $("#new-song");
	var addArtist = $("#new-artist");
	var addAlbum = $("#new-album"); 
	var selection = '';

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
			var newLine = {
				addASong:	{
					"title": addSong.val(),
	     			"artist": addArtist.val(),
	    			"album": addAlbum.val()
					}
				};
			$("#add-section").addClass("hidden");
			$("#bluebox").show();
			$("#yellowbox").show();	
			
//Call addMore to invoke function that adds the input data via an AJAX call to the API
			addMore.addData();

//Call add to invoke function that displays the input data in the songlist 
			add.addSongsToList(newLine);
			}   //end of else
//blank out input values so the input boxes are cleared
			addSong.val("");
			addArtist.val("");
			addAlbum.val("");
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


//check to see if the filter button has been clicked.  
	$("#filter").click(function() {
		artistselection = $("#artist-opt option:selected").text();
		console.log("artist selection ", artistselection);
		albumselection = $("#album-opt option:selected").text();
		console.log("album selection ", albumselection);
		songSelections = $(".songLists");  //all the div created with the HBS Ajax call 
		console.log("songSelections ", songSelections);

		songSelections.each(function(){
//children of "this" -- i.e.songSelections, are the divs with the class of artist or album
			artistList = $(this).children(".artist").text();  
			console.log("artistList ", artistList);
			albumList = $(this).children(".album").text();
			console.log("albumList ", albumList);

			if ((artistselection !== artistList) && (albumselection !== albumList)) {
				console.log("this ", this);
				$(this).hide();
			}
		});



	});

//closing brackets //////////////////////////////////////////////////////////////////////////////////
});

