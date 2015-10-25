var yellowList = [];
var newLine = '';
var moreButton = '';

//Begin jQuery code

$(document).ready(function() {

	var listSong = $("#lineOne");
	var addSong = $("#new-song");
	var addArtist = $("#new-artist");
	var addAlbum = $("#new-album"); 
//	var addMusic = $("#add-music");

 

// Listen for the click on the Add Music nav and display input scrren and hide blue & yellow box

	$("#add-music").click(function()  {
		$("#add-section").removeClass("hidden");
		$("#bluebox").hide();
		$("#yellowbox").hide();
	});

	$("#add-done").click(function() {
		$("#add-section").addClass("hidden");
		$("#bluebox").show();
		$("#yellowbox").show();	
	
		newLine = "<div class='songLists'>" 
			    + "<button class='delete'>Delete</button>"
		        + "   "
				+ addSong.val() 
				+ " by " 
				+ addArtist.val() 
				+ " on the album " 
				+ addAlbum.val() 
				+ "</div>";
		$("#lineOne").append(newLine);
		addSong.val("");
		addArtist.val("");
		addAlbum.val("");
	});

//This function will add the info from the JSon file to the DOM (aka yellowbox)
//{Song name} by {Artist} on the album {Album}

	function addSongsToList(songLists) {
		for (var i = 0; i < songLists.songs.length; i++) {
		   	yellowList[i] = "<div class='songLists'>"
			            + "<button class='delete'>Delete</button>"
			            + "   "
			            + songLists.songs[i].title 
			            + " by " 
			            + songLists.songs[i].artist 
			            + " on the album " 
			            + songLists.songs[i].album
			            + "</div>";
		    $("#lineOne").append(yellowList[i]);
		}

		var moreButton = "<button class='more'>MORE</button>";
		$("#lineOne").append(moreButton);

	}

	$("body").on('click', '.delete', function(event) {
		  // Delete div element including message and button
		// used this "event" log to go through object
		// to find what it is associated with
		console.log(event);
		event.target.parentNode.remove();
	});


//AJAX will get the songlist and then call a function to create the list in the yellow box
	$.ajax({
	 url: "songs.json"
	}).done(function(songLists) {
		addSongsToList(songLists);
	});

//	$(".more").click(function() {
	$("body").on("click",".more", function(event) {
		$.ajax({
		 url: "moreSongs.json",
		 error: function (a, b, c) {
		 	console.log(a);
		 	console.log(b);
		 	console.log(c);
		 }
		}).done(function(songLists2) {
			$(".more").remove();
			addSongsToList(songLists2);

		});
	});

//closing brackets for JQuery
});

