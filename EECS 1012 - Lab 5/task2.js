/* write your code here */
currentFont = 12;
window.onload = function() {
  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  var b3 = document.getElementById("b3");
  var b4 = document.getElementById("b4");
  var b5 = document.getElementById("b5");
  var b6 = document.getElementById("b6");
  var b7 = document.getElementById("b7");
  b1.onclick = Green;
  b2.onclick = Blue;
  b3.onclick = Mono;
  b4.onclick = SansSerif;
  b5.onclick = Serif;
  b6.onclick = SizeUp;
  b7.onclick = SizeDown;
}

function Green(){
  var p = document.getElementById("paragraph");
p.style.color = "green";
}
function Blue(){
  var p = document.getElementById("paragraph");
p.style.color = "blue";
}
function Mono(){
  var p = document.getElementById("paragraph");
p.style.fontFamily = "monospace";
}
function SansSerif(){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "sans-serif";
}
function Serif(){
  var p = document.getElementById("paragraph");
  p.style.fontFamily = "serif";
}
function SizeUp(){
  var p = document.getElementById("paragraph");
  p.style.fontSize = parseInt(currentFont) + parseInt(1) + "pt";
currentFont = parseInt(currentFont) + parseInt(1) + "pt";
}
function SizeDown(){
  var p = document.getElementById("paragraph");
  p.style.fontSize = parseInt(currentFont) + parseInt(-1) + "pt";
  currentFont = parseInt(currentFont) + parseInt(-1) + "pt";
}
