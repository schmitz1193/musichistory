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
