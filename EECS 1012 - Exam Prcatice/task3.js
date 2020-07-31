/* Practice Lab Test #2, Task 3  */
/* EECS1012 - York University  */

/* write your code here */

window.onload = function(){
  $("add").observe("click", add);
  $("delete").observe("click", deleteFunction);
  $("deleteItem").observe("click", deleteItem);
  $("input").observe("click", input);
}

function add(){
  var x = document.createElement("li");
  x.innerHTML = $("input").value;
  var list = $("list");
  list.appendChild(x);
}

function deleteFunction(){
  var allLi = $("list").getElementsByTagName("li");
  if(allLi.length > 0){
  $("list").removeChild(allLi[allLi.length-1]);
}
}

function deleteItem(){
  var allLi = $("list").getElementsByTagName("li");
  if(allLi.length > 0){
  $("list").removeChild(allLi[$("item").value-1]);
}
}

function input(){
$("input").value = null;
}
