$(document).ready(function() {

  /* General */
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 96) { // El valor debe ser igual a la altura del header
       $("header").addClass("sticky");
    }
    else {
       $("header").removeClass("sticky");
    }
  });

  /* TrafficLike */
  $( "#trafficSwitch" ).click( function() {
/*    console.log($( "#red" ).hasClass( "on" ));
    if ($( "#red" ).hasClass( "on" ) == false &&
        $( "#orange" ).hasClass( "on" ) == false &&
        $( "#green" ).hasClass( "on" ) == false) {

      $( "#red" ).addClass( "on" );
     console.log($( "#red" ).hasClass( "on" ));
    }*/

    if ($( "#red" ).hasClass( "on" ) == true) {
        $( "#red" ).removeClass( "on" );

        $( "#orange" ).addClass( "on" );
    }

    else if ($( "#orange" ).hasClass( "on" ) == true) {
        $( "#orange" ).removeClass( "on" );

        $( "#green" ).addClass( "on" );
    }

    else {
        $( "#green" ).removeClass( "on" );

        $( "#red" ).addClass( "on" );
    }

  });


/*$(document).ready(function(){
  $("input[name=trafficSwitch]").change(function () {
    $(".red").addClass("on");
    $(".orange").addClass("off");
    $(".green").addClass("off");
  });
});
*/

/*var trafficLight = document.getElementById();

switch ( document.getElementsByName("fname");) {
    case 0:
    trafficLight.("red").style.opacity = "1";
    trafficLight.("orange").style.opacity = "0.5";
    trafficLight.("green").style.opacity = "0.5";
    break

    case 1:
    trafficLight.("red").style.opacity = "0.5";
    trafficLight.("orange").style.opacity = "1";
    trafficLight.("green").style.opacity = "0.5";
    break

    case 2:
    trafficLight.("red").style.opacity = "0.5";
    trafficLight.("orange").style.opacity = "0.5";
    trafficLight.("green").style.opacity = "1";

}*/

/*
// definir una variable universal para elegir el elemento en el que se va a prducir el cambio
var element = document.getElementById('id');

// elegir la selección 
function changeColor(){ 
    var i;
    for ( i = 0; i < document.trafficLight.trafficSwitch.length; i++ ) {
        if (document.trafficLight.trafficSwitch[i].checked)
            break;
    }
    element.style.opacity = "0.9" = document.trafficLight.trafficSwitch[i].value
}
*/

// function trafficLight() {

// var checkRed = document.getElementById(checkRed).checked;
// var checkOrange = document.getElementById(checkOrange).checked;
// var checkGreen = document.getElementById(checkGreen).checked;

// if 
// {
//     trafficLight.("red").style.opacity = "1";
//     trafficLight.("orange").style.opacity = "0.5";
//     trafficLight.("green").style.opacity = "0.5";
  
// }

// else {
//     if 
//     function checkOrange() {
//     trafficLight.("red").style.opacity = "0.5";
//     trafficLight.("orange").style.opacity = "1";
//     trafficLight.("green").style.opacity = "0.5";

// }
// }

// else
// function checkGreen() {
//     trafficLight.("red").style.opacity = "0.5";
//     trafficLight.("orange").style.opacity = "0.5";
//     trafficLight.("green").style.opacity = "1";


/*var interruptor = false;
if(interruptor != false) {

    document.getElementById("interruptor").checked = true;
    else {
    interruptor = false;
}
}*/

/* Tabbimg */

/* CAMBIO DE IMÁGENES AL HACER CLIC */
  $( "#button1" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button2" ).removeClass( "btnhover" );
    $( "#button3" ).removeClass( "btnhover" );
    $( "#image1" ).show();
    $( "#image2" ).hide();
    $( "#image3" ).hide();

  });

  $( "#button2" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button1" ).removeClass( "btnhover" );
    $( "#button3" ).removeClass( "btnhover" );
    $( "#image1" ).hide();
    $( "#image2" ).show();
    $( "#image3" ).hide();

  });

  $( "#button3" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button1" ).removeClass( "btnhover" );
    $( "#button2" ).removeClass( "btnhover" );
    $( "#image1" ).hide();
    $( "#image2" ).hide();
    $( "#image3" ).show();

  });

/* AÑADIENDO Y ELIMINANDO CLASES CSS */

/*  $( "#button1" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button2" ).removeClass( "btnhover" );
    $( "#button3" ).removeClass( "btnhover" );
    $( "#image1" ).removeClass( "hide" );
    $( "#image2" ).addClass( "hide" );
    $( "#image3" ).addClass( "hide" );

  });

  $( "#button2" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button1" ).removeClass( "btnhover" );
    $( "#button3" ).removeClass( "btnhover" );
    $( "#image1" ).addClass( "hide" );
    $( "#image2" ).removeClass( "hide" );
    $( "#image3" ).addClass( "hide" );

  });

  $( "#button3" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button1" ).removeClass( "btnhover" );
    $( "#button2" ).removeClass( "btnhover" );
    $( "#image1" ).addClass( "hide" );
    $( "#image2" ).addClass( "hide" );
    $( "#image3" ).removeClass( "hide" );

  });*/

/* USANDO LAS FUNCIONES SHOW / HIDE DE JQUERY */

/*  $( "#button1" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button2" ).removeClass( "btnhover" );
    $( "#button3" ).removeClass( "btnhover" );
    $( "#image1" ).show();
    $( "#image2" ).hide();
    $( "#image3" ).hide();

  });

  $( "#button2" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button1" ).removeClass( "btnhover" );
    $( "#button3" ).removeClass( "btnhover" );
    $( "#image1" ).hide();
    $( "#image2" ).show();
    $( "#image3" ).hide();

  });

  $( "#button3" ).click( function() {

    $( this ).addClass( "btnhover" );
    $( "#button1" ).removeClass( "btnhover" );
    $( "#button2" ).removeClass( "btnhover" );
    $( "#image1" ).hide();
    $( "#image2" ).hide();
    $( "#image3" ).show();

  });
*/

/* SuperbVid */
  var vid = document.getElementById("supervid"); // $("#supervid");

  vid.onended = function() {
    alert("That's all folks");
    vid.controls = true;
  };

  vid.onvolumechange = function() {
    alert("The volume has been changed");
  };

  $( "#toggleVid" ).click( function() {

/*    if (vid.getAttribute("src") == "media/movie.mp4") {
        vid.setAttribute("src", "media/movie_alt.mp4");  
    }
    else {
        vid.setAttribute("src", "media/movie.mp4");
    }
    vid.load();*/
    
    if ($("#supervid").attr("src") == ("media/movie_alt.mp4")) {
    $("#supervid").attr("src","media/movie.mp4");  
    }
    else {
    $("#supervid").attr("src","media/movie_alt.mp4");
    }
    vid.load();
  });
  
  $( "#playVid" ).click( function() {
      vid.play();
  });

  $( "#pauseVid" ).click( function() {
      vid.pause();
  });

  $( "#togglePlay" ).click( function() {
      if (vid.paused == true) {
        vid.play();
      }
      else {
      vid.pause();
      }
  });

  $( "#enableControls" ).click( function() {
      vid.controls = true;
      vid.load();
  });

  $( "#disableControls" ).click( function() {
      vid.controls = false;
      vid.load();
  });

  $( "#toggleControls" ).click( function() {
      if (vid.hasAttribute("controls")) {
      vid.removeAttribute("controls")   
      }
      else {
      vid.setAttribute("controls","controls")   
      }
  });

  $( "#checkControls" ).click( function() {
      alert(vid.controls);
  });

  $( "#advance3s" ).click( function() {
      vid.currentTime += 3;
  });

/* Lotto */

  $( "#getLucky" ).click( function() {

    // pedir por AJAX 
    $.ajax ({
      "method": "get",
      "url": "http://192.168.201.102/loteria"
    })

    // "done" es un evento que te parsea el JSON cuando lo ha recibido del servidor
    .done( function( data ) {
      var response = JSON.parse( data );

    // pinto por pantalla
    $( ".coupon p" ).html("Congrats " + response.nombre + " you have won the lottery with this lucky number " + response.numero + " !!!");
    
    });

  });

  /* Griffin */

  //javascript, jQuery
  var loadGif = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
  loadGif.done(function(data) { console.log("Habemus datos", data); });

}); // End of document.ready

/* Codeuniform */
  var canvas = document.getElementById("sheet");
  var ctx = canvas.getContext("2d");
  var c = window.screen;
  var width = canvas.width = c.width;
  var height = canvas.height;
  var yPositions = Array(300).join(0).split("");
  
  var draw = function () {
    ctx.fillStyle = "rgba(250,250,250,.05)";
    ctx.fillRect(0,0,width,height);
    ctx.font = "20pt zarathustra";
    ctx.fillStyle = "#333333";
    yPositions.map(function(y, index){
      text = String.fromCharCode(1e2 + Math.random() * 50);
      x = (index * 30) + 10;
      sheet.getContext("2d").fillText(text, x, y);

      if(y > 100 + Math.random() * 1e4) {
        yPositions[index] = 0;
      }
      else {
        yPositions[index] = y + 10;
      }
    });
  };
  function RunMatrix() {
  if(typeof interval != "undefined") clearInterval(interval);
      interval = setInterval(draw, 33);
  };
  RunMatrix();
