define(["jquery", "q"], function($, Q) {

	var deferred = Q.defer();	

	return {



	deleteData: function(deleteKey) {


//pass in the key name for the record selected for delete
			$.ajax({url: "https://burning-inferno-2252.firebaseio.com/songs/" + deleteKey + "/.json",
			method: "DELETE"
			}).done(function() 
				{
				deferred.resolve();
        	    }).fail(function(xhr, status, error) {
        	    deferred.reject(error);
        	    });
            return deferred.promise;
 
		}	
	};	

});
