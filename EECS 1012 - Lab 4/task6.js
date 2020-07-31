/* Task6.js - Add your Java Script Code Here */
var globalVaribale = 21;

function myFunction(){
    globalVaribale--;
    if(globalVaribale >0 ){
  document.getElementById("mydata").innerHTML = globalVaribale;
}else{
  document.getElementById("mydata").innerHTML = "BOOM!";
}

}
