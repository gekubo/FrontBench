$(document).ready(function() {

  /* General */
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 96) { // El valor debe ser igual a la altura del header
       $("header").addClass("sticky");
    }
    else {
       $("header").removeClass("sticky");
    }
  })

  /* Griffin */

  // Initialize the loop to call and draw 5 gifs from Giphy
  for (var i = 0; i < 6; i++) {
  // Load gifs from Giphy API
    $( "#loadGifs" ).click( function() {
    var getGif = $.ajax({
      url: "http://api.giphy.com/v1/gifs/random?tag=star+wars",
      method: "GET",
      data: {api_key: "dc6zaTOxFJmzC"}
      });

      getGif.done(function(response) {

      /*console.log("Habemus datos", response);*/

      // Parse JSON to create a new object (not neccesary for Giphy API)
      /*    var object = JSON.parse(response.data.image_mp4_url);*/
      // Get URL link from the object & print the link in the HTML view

      var randomGif = response.data.image_url;
      /*console.log(randomGif);*/

      // Create <i> images and their id
      //Equivalent: $(document.createElement("img"))
      var img = $('<img id="giphy-src" />');
      // Modify the src of each image
      img.attr("src", randomGif);
      img.addClass("col3");
      img.appendTo(".giphy-block");

      // Delete previous charge of gifs
      /*$("#giphy-src").attr("src", randomGif);*/
    });
  
  });
}

}); // End of document.ready
