window.onload = function(){
  $("input1").observe("keydown", clearText)
  $("input2").observe("keydown", clearText)
  $("input3").observe("keydown", clearText)
  $("submitButton").onclick = submit;
}

function clearText(){
  this.value = null;
  this.stopObserving("keydown");
}

function submit(){
  if ($("input1").value == "" ||$("input2").value == "" ||$("input3").value == "") {
    $("ErrorMessage").innerHTML = "One of your fields has an error!";
}
else {
$("myForm").submit();
}
}
