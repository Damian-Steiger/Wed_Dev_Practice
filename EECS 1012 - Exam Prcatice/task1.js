/* EECS1012 - Practice Lab Test #2 */
 window.onload = function() {
   red();
   $("cardId").observe("keyup", regexOne);
   $("countryCode").observe("keyup", regexTwo);
   $("amount").observe("keyup", regexThree);
   $("submitButton").observe("click", enforcer);
}

// sets the default color to red
function red(){
  $("cardId").style.backgroundColor = "mistyrose";
  $("countryCode").style.backgroundColor = "mistyrose";
  $("amount").style.backgroundColor = "mistyrose";
}

//regex for card id
function regexOne(){
  var re= /^[AC][0-9][0-9][0-9][0-9][A-Z]$/i;
  if(re.test($("cardId").value) == true){
    $("cardId").style.backgroundColor = "lightblue";
  }else {
    $("cardId").style.backgroundColor = "mistyrose";
  }
}

//regex for card countryCode
function regexTwo(){
  var regexCodes = ["CAN", "MEX", "USA", "EUR", "OTHER"];
  var code = $("countryCode").value;
  code = code.toUpperCase();
  if(regexCodes.includes(code)){
    $("countryCode").style.backgroundColor = "lightblue";
  }else {
    $("countryCode").style.backgroundColor = "mistyrose";
  }
}

//regex for card amount
function regexThree(){
  var re=/^\$[0-9]+[\.]?[0-9]*$/;
  if(re.test($("amount").value) == true){
    $("amount").style.backgroundColor = "lightblue";
  }else {
    $("amount").style.backgroundColor = "mistyrose";
  }
}

//enforcer
function enforcer(){

  skeletonKey = true;
  test = document.getElementsByClassName("input");
  for(var i = 0 ; i < test.length ; i++){
    if(test[i].style.backgroundColor != "lightblue"){
      skeletonKey = false;
    }
  }

  if(skeletonKey == true){
  $("submitButton").style.backgroundColor = "lightblue";
  }else{
  $("submitButton").style.backgroundColor = "mistyrose";
  }
}
