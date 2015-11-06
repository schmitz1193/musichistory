

define(["jquery", "hbs"], function($, handlebars) {

	return {

//NOTE to self:  review syntax for functions within returns!!!!!

//This function will add the info from the JSon file to the DOM (aka yellowbox)
//{Song name} by {Artist} on the album {Album}
	addSongsToList: function(songLists) {
console.log("made it to add!!!");
		require(["hbs!../templates/songs"], function(songTemplate) {
				$("#lineOne").append(songTemplate(songLists));
				moreButton = "<button class='more'>MORE</button>";
				$("#lineOne").append(moreButton);
			});
		}
	};
});