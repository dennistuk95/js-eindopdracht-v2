
function myFunction() {
  var x = document.getElementById("openMenu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var changeRed = document.getElementById("redBackground");
var changeOrange = document.getElementById("orangeBackground");
var changePurple = document.getElementById("purpleBackground");
var changeGreen = document.getElementById("greenBackground");

if (changeRed) {
  var body = document.getElementById("body");
  changeRed.addEventListener('click', function () {
    body.classList.remove("no-background" && "orange-background" && "purple-background" && "green-background");
    body.classList.add("red-background");
    var x = document.getElementById("openMenu");
    x.style.display = "none";
  })
}

if (changeOrange) {
  var body = document.getElementById("body");
  changeOrange.addEventListener('click', function () {
    body.classList.remove("no-background" && "red-background" && "purple-background" && "green-background");
    body.classList.add("orange-background");
    var x = document.getElementById("openMenu");
    x.style.display = "none";
  })
}
if (changePurple) {
  var body = document.getElementById("body");
  changePurple.addEventListener('click', function () {
    body.classList.remove("no-background" && "orange-background" && "red-background" && "green-background");
    body.classList.add("purple-background");
    var x = document.getElementById("openMenu");
    x.style.display = "none";
  })
}
if (changeGreen) {
  var body = document.getElementById("body");
  changeGreen.addEventListener('click', function () {
    body.classList.remove("no-background" && "orange-background" && "red-background" && "purple-background");
    body.classList.add("green-background");
    var x = document.getElementById("openMenu");
    x.style.display = "none";
  })
}
