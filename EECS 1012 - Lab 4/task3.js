/* Task3.js - Add your Java Script Code Here */
function myFunction1(number){
  var sum = 0;
  for(start = 0; start<=number ; start++){
    sum = sum + start;
  }
  document.getElementById("mydata").innerHTML ="Result = " + sum;
}
