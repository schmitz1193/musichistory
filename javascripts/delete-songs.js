define(["jquery"], function($) {

	return {



	deleteData: function(deleteKey) {


//pass in the key name for the record selected for delete
			$.ajax({url: "https://burning-inferno-2252.firebaseio.com/songs/" + deleteKey + "/.json",
			method: "DELETE"
			}).done(function() {
	  console.log("Yay, it deleted!");
			});
 
		}	
	};	

});
