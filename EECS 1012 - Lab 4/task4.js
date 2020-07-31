/* Task4.js - Add your Java Script Code Here */
function myFunction()
{
var value1 = Math.floor(Math.random()*6) + 1;
var value2 = Math.floor(Math.random()*6) + 1;

document.getElementById("mydata").innerHTML = "Dice Rolls Are " +"&quot"+ value1 +"&quot"+ " and " +"&quot"+ value2 +"&quot" ;

if(value1 == value2){
  alert("DOUBLES!");
}
}
