/* Practice Lab Test #2, Task 4 */
/* EECS1012 - York University  */

/* write your code here */
/* Array of image names is aleady provided for you */
var images=["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"];
var i = 0;
var b = 0;

window.onload = function(){
  $("bar").observe("mouseover", spinControl);
  $("bar").observe("mouseout", spinStop);
}

function spinControl(){
  $("result").innerHTML = "Spin";
  $("bar").innerHTML = "Move off to stop";
  $("bar").style.backgroundColor = "grey";
  intervalOne = setInterval(spinOne, 80);
  intervalTwo = setInterval(spinTwo, 100);
}

function spinStop(){
  clearInterval(intervalOne);
  clearInterval(intervalTwo);
  if(i == b){
    $("result").innerHTML = "You Win";
  }else{
    $("result").innerHTML = "You Lose";
  }
  $("bar").innerHTML = "Move on Spin";
  $("bar").style.backgroundColor = "white";
}

function spinOne(){
  i++
  if(i>7){
    i=0;
  }
  $("img1").src = images[i];
}

function spinTwo(){
  b++
  if(b>7){
    b=0;
  }
  $("img2").src = images[b];
}
