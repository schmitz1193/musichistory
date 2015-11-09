define(["jquery"], function($) {
	return {



	addData: function() {


		var newSong = {
			name: $("#new-song").val(),
			artist: $("#new-artist").val(),
			album: $("#new-album").val()
		};



		//AJAX will get the songlist and then invoke the function to add the  songlist data to the yellow box
				$.ajax({url: "https://burning-inferno-2252.firebaseio.com/songs/.json",
				method: "POST",
				data: JSON.stringify(newSong)
			}).done(function(addSong) {
				console.log("Your new song is ", addSong);
		});
}

};
});


