/* Task5.js - Add your Java Script Code Here */
function myFunction(){
  //initializes the elements of the date
  var d = new Date();
  var dayOfMonth = d.getDate();
  var dayOfWeek = d.getDay();
  var month = d.getMonth();
  var year = d.getFullYear();
  var monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var daysArray = ["(Sun)","(Mon)","(Tue)","(Wed)","(Thu)","(Fri)","(Sat)"];


  document.getElementById("mydata").innerHTML = "Today is the "+ dayOfMonth +" "+ daysArray[dayOfWeek] +" "+ monthArray[month]+" "+year;
}
