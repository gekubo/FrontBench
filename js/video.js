var vid = document.getElementById("supervid"); // $("#supervid");

vid.onended = function() {
    alert("That's all folks");
    vid.controls = true;
};

function playVid() {
    vid.play();
};

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
  if (vid.controls = false) {
      vid.controls = true;
  }
  else {
    vid.controls = false;
  }
};

function checkControls() { 
    alert(vid.controls);
};