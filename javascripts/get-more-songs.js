

define(["jquery"], function($) {

	return {

		getData: function(returnMore) {
// this function passes a function as a parameter from songs.js 
//AJAX will get the songlist2 and then return the function with the songlist data
//in songs.js, the function is involkes and adds to the list in the yellow box

	//	call Ajax a second time to get addition songs
			$.ajax({url: "data/moreSongs.json", error: function (a, b, c) {console.log(a); console.log(b); console.log(c);}}).done(function(songLists2) {
				$(".more").remove();
				returnMore(songLists2);
			});
		}

	};

});