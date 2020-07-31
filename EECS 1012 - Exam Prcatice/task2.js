/* Practice Lab Test #2, Task 2  (version 1)*/
/* EECS1012 - York University  */

/* write your code here */
//runs when the window is loaded
window.onload = function() {
  $("0").observe("click",addNum);
  $("1").observe("click",addNum);
  $("2").observe("click",addNum);
  $("3").observe("click",addNum);
  $("4").observe("click",addNum);
  $("5").observe("click",addNum);
  $("6").observe("click",addNum);
  $("7").observe("click",addNum);
  $("8").observe("click",addNum);
  $("9").observe("click",addNum);
  $("delete").observe("click",addNum);
}

//adds a new number to the screen
function addNum(){
      //if the button is the delete one then it calls the delete function
      if(this.innerHTML == "Delete"){
          deleteNum();
        }else{
          $("entry").innerHTML = $("entry").innerHTML + this.innerHTML;
        }
}

//the delete function removes the last number added
function deleteNum(){
    var s = $("entry").innerHTML;
     $("entry").innerHTML = s.slice(0,-1);
}
