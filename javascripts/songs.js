

define(["jquery", "lodash", "hbs", "q", "firebase", "format-songs", "add-more", "filter", "delete-songs"], 
	function($, lodash, handlebars, Q, firebase, format, addMore, filter, deleteSongs) {

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
		// populate.getData(format.formatLists);

// Create a reference to your Firebase database
var myFirebaseRef = new Firebase("https://burning-inferno-2252.firebaseio.com/");

// Listen for when anything changes on the "songs" key
myFirebaseRef.child("songs").on("value", function(snapshot) {

  // Store the entire songs key in a local variable
  var allSongsObject = snapshot.val();

  console.log("allSongsObject ", allSongsObject);

  // Bind the allSongsObject to the song list Handlebar template
  // Bind the unique artists to the artists template
  // Bind the unique albums to the albums template

  format.formatLists(allSongsObject);

});		

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
			    $(".modal-title").text("Alert!");
			    $("#add-modal").text("You must enter Song, title and artist.  Please try again.");
			}
			else {
			
//Call addMore to invoke function that adds the input data via an AJAX call to the API
				addMore.addData()
				.then(function(addedSong) {
					console.log("promise kept!");
			        $(".modal-title").text("Success!");
			        $("#add-modal").text("Your music has been added to the database.");
			    })
			    // Fail gets executed when promise is rejected
		        .fail(function(error) {
		        	console.log("promis broken!!");
			        $(".modal-title").text("Alert!");
			        $("#add-modal").text("There was a problem adding your music.  Please try again.");

 			    });

				$("#add-section").addClass("hidden");
				$("#bluebox").show();
				$("#yellowbox").show();	
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

			deleteSongs.deleteData(deleteKey)
					.then(function(addedSong) {
					console.log("promise kept!");
			        $(".modal-title").text("Success!");
			        $("#add-modal").text("Your music has been removed from the database.");
			    })
			    // Fail gets executed when promise is rejected
		        .fail(function(error) {
		        	console.log("promise broken!!");
			        $(".modal-title").text("Alert!");
			        $("#add-modal").text("There was a problem deleting your music.  Please try again.");

 			    });

// Delete div element including message and button 
// used this "event" log to go through object to find what it is associated with
			event.target.parentNode.remove();
		});


//closing brackets //////////////////////////////////////////////////////////////////////////////////
});

