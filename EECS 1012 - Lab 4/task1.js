/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");

  //creates a random number
  var rn = Math.random();

  //decides if num is over .5
  if (rn < .5){
    	p.innerHTML  = "No";

  }else {
      p.innerHTML = "Yes";
  }
}
