/* Task 4 code here */
i = 0;
window.onload = function(){
  var addButton = document.getElementById("add");
  var deleteButton = document.getElementById("delete");
      addButton.onclick = addFunction;
      deleteButton.onclick = deleteFunction;
}

//add the newest paragraph to the top of the list and not the bottom.
function addFunction(){
  i++;
  var paragraph = document.createElement("p");
  var node = document.createTextNode(document.getElementById("input").value);
  paragraph.appendChild(node);
  var element = document.getElementById("output");
  element.insertBefore(paragraph,element.childNodes[i]);
}

function deleteFunction(){
var parent = document.getElementById("output");
if(parent.childNodes[1] == null) {
  window.alert("No paragraph to delete!");
}else{
var child = parent.childNodes[1];
parent.removeChild(child);
}
}



//create and alert when no more paragraphs can be removed.
