define(["jquery", "q"], function($, Q) {

	var deferred = Q.defer();	

	return {

	addData: function() {


		var newSong = {
			title: $("#new-song").val(),
			artist: $("#new-artist").val(),
			album: $("#new-album").val()
		};



		//AJAX will get the songlist and then invoke the function to add the  songlist data to the yellow box
				$.ajax({url: "https://burning-inferno-2252.firebaseio.com/songs/.json",
				method: "POST",
				data: JSON.stringify(newSong)
				}).done(function(addSong) 
				{
				deferred.resolve(addSong);
        	    }).fail(function(xhr, status, error) {
        	    deferred.reject(error);
        	    });

            return deferred.promise;



	} //addData function ends

	};//return ends
});//
 
