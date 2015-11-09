

define(["jquery", "add-songs"], function($, add) {

	return {

		getData: function() {


//AJAX will get the songlist2 and then invokes the function that adds that data to the list in the yellowbox
//	call Ajax a second time to get addition songs
			$.ajax({url: "data/moreSongs.json", error: function (a, b, c) {console.log(a); console.log(b); console.log(c);}
			}).done(add.addSongsToList); 
			$(".more").remove();
		}			

	};

});