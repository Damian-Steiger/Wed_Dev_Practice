/* Lab 6 - Task 2  */
 window.onload = function() {
   //resets fields when clear button is pressed
   $("clear").observe("click", clearFunction);
   //submits the form
   $("submitButton").observe("click", submitForm);
   //observes the fields
   $("userid").observe("keyup", enforceUserid);
   $("code").observe("keyup", enforceCode);
   $("number").observe("keyup", enforceNumber);
}

function enforceUserid(){
  var re = /^[A-Z][A-Z 0-9]+$/i;

  if(re.test($(this).value) == true){
      $(this).nextElementSibling.innerHTML = "CORRECT";
    }else{
      $(this).nextElementSibling.innerHTML = "INCORRECT";
    }
}

function enforceCode(){
  var codes = ["EECS", "ESSE", "MATH", "HIST", "CHEM", "BIO"];
  var classCode = $("code").value;
  classCode = classCode.toUpperCase();
  if(codes.includes(classCode)){
      $(this).nextElementSibling.innerHTML = "CORRECT"
    }else{
      $(this).nextElementSibling.innerHTML = "INCORRECT"
    }
}

function enforceNumber(){
  var re = /^[0-9][0-9][0-9][0-9]$/

  if(re.test($(this).value) == true){
      $(this).nextElementSibling.innerHTML = "CORRECT"
    }else{
      $(this).nextElementSibling.innerHTML = "INCORRECT"
    }
}

function submitForm(){
  var spans = document.getElementsByClassName("message");
  var skeletonKey = true;
  for(var i = 0; i < spans.length; i++){
    if(spans[i].innerHTML != "CORRECT"){
      skeletonKey = false;
    }
  }
  if(skeletonKey){
    $("myForm").submit();
  }else{
    window.alert("Form is incorrect");
  }
}

function clearFunction(){
var spans = document.getElementsByClassName("message");
for(var i = 0; i < spans.length; i++){
  spans[i].innerHTML = "";
}
}
