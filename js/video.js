var vid = document.getElementById("supervid"); // $("#supervid");

vid.onended = function() {
    alert("That's all folks");
    vid.controls = true;
};

vid.onvolumechange = function() {
    alert("The volume has been changed");
};

/*var play = document.getElementById("playVid");

play.onclick = function() {
  vid.play();
};*/

/*function playVid() {
    vid.play();
};*/

  $( "#playVid" ).click( function() {
        vid.play();
  });

function pauseVid() {
    vid.pause();
};

function togglePlay() {
  if (vid.paused == true) {
    vid.play();
  }
  else {
    vid.pause();
  }
};

/*function togglePlay() {
  if (vid.played == false) {
    vid.pause();
  }
  else {
    vid.play();
  }
};*/

function enableControls() { 
    vid.controls = true;
    vid.load();
};

function disableControls() { 
    vid.controls = false;
    vid.load();
};

function toggleControls() {
  if (vid.hasAttribute("controls")) {
      vid.removeAttribute("controls")   
  }
  else {
     vid.setAttribute("controls","controls")   
  }
};

function checkControls() { 
    alert(vid.controls);
};