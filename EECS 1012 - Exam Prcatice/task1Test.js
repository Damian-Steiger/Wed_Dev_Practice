window.onload = function(){
  setRed();
  $("cardId").observe("keyup", regexOne);
  $("countryCode").observe("keyup", regexTwo);
  $("amount").observe("keyup", regexThree);
  $("submitButton").observe("click", submitButton);
}

function setRed(){
  $("cardId").style.backgroundColor = "mistyrose";
  $("countryCode").style.backgroundColor = "mistyrose";
  $("amount").style.backgroundColor = "mistyrose";
}

function regexOne(){
  var re = /^[AC][0-9][0-9][0-9][0-9][A-Z]$/i;
if(re.test($("cardId").value) == true){
    $("cardId").style.backgroundColor = "lightblue";
}else{
    $("cardId").style.backgroundColor = "mistyrose";
}
}

function regexTwo(){
countriesArray = ["CAN", "MEX", "USA", "EUR", "OTHER"];
codes = $("countryCode").value;
codes = codes.toUpperCase();
if(countriesArray.includes(codes)){
    $("countryCode").style.backgroundColor = "lightblue";
}else{
    $("countryCode").style.backgroundColor = "mistyrose";
}
}

function regexThree(){
  var re = /^\$[0-9]+[\.]?[0-9]*$/;
  if(re.test($("amount").value) == true){
      $("amount").style.backgroundColor = "lightblue";
  }else{
      $("amount").style.backgroundColor = "mistyrose";
  }
}

function submitButton(){
  var control = true;
  var colorsArray = document.getElementsByTagName("input");
  for(var i = 0; i < colorsArray.length; i++){
    if(colorsArray[i].style.backgroundColor == "mistyrose"){
      control = false;
    }
  }
  if(control){
      $("submitButton").style.backgroundColor = "lightblue";
  }else{
      $("submitButton").style.backgroundColor = "mistyrose";
  }
}
