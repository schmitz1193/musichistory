$(document).ready(function() {

  $.ajax({
    url: "data/songs.json"
  }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
    console.log("the contents of songs.json");
    console.log(contentsOfTheFile);


    for (var i = 0; i < contentsOfTheFile.songs.length; i++) {
    //Must add each string to the DOM in index.html in the main content area.
    //{Song name} by {Artist} on the album {Album}

      newLine = "<div class='songLists'>"
               + songs.title.val() 
               + " by " 
               + songs.artist.val() 
               + " on the album " 
               + songs.album.val()
               + "</div>";
      
      $("#lineOne").append(newLine);

     };


  });

});