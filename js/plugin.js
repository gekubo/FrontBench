/*TRAFFICLIKE*/
$( document ).ready( function() {

  $( ".button" ).click( function() {
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

/* TABBIMG */

$( document ).ready( function() {

/*CAMBIO DE IMÁGENES AL HACER CLIC*/
function change () {

}

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

/*AÑADIENDO Y ELIMINANDO CLASES CSS*/

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

/*USANDO LAS FUNCIONES SHOW / HIDE DE JQUERY*/

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
});