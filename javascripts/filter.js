define(["jquery", "lodash"], function($, lodash) {



//check to see if the filter button has been clicked.  
	$("#filter").click(function() {
		artistselection = $("#artist-opt option:selected").text();
		albumselection = $("#album-opt option:selected").text();
		songSelections = $(".songLists");  //all the div created with the HBS Ajax call 

		songSelections.each(function(){
//children of "this" -- i.e.songSelections, are the divs with the class of artist or album
			artistList = $(this).children(".artist").text();  
			albumList = $(this).children(".album").text();
			if ((artistselection !== artistList) && (albumselection !== albumList)) {
				console.log("this ", this);
				$(this).hide();
			}
			else {
				$(this).show();
			}
		});

	});  //end filter click

});

	// Code Andri and I discussed...try to implement and should help with unfilter challenge.
    // function filterSongs (songDatabase, filterSelect, userSongs) {
    //     var songGroup = songDatabase.songs;
    //     for (var songkey in songGroup) { // Checks to see if each object in songGroup has a key
    //         if (songGroup.hasOwnProperty(songkey)) { // Checks to see if the object has key-value pairs
    //             var thisSong = songGroup[songkey];
    //             if (thisSong.artist === filterSelect) { // Checks to see if key value matches user's choice of artist, pushes to userSongs array
    //                 userSongs.push(thisSong);
    //             }
    //             if (thisSong.album === filterSelect) {
    //                 userSongs.push(thisSong); // Checks to see if key value matches user's choice of album, pushes to userSongs array
    //             }
    //         }
    //     }

    //     var filteredObject = { "songs" : userSongs }; // Prepares filtered songs to match object style so same function from app page can process information and load to DOM
    //     populatesongs.dataToTemplate(filteredObject); // Applies HBS template to filtered object, executed after API loads via AJAX on line 56
    
    // } // closes filterSongs function