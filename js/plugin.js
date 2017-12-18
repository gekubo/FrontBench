/*TRAFFICLIKE*/

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
}

/*var interruptor = false;
if(interruptor != false) {

    document.getElementById("interruptor").checked = true;
    else {
    interruptor = false;
}
}*/