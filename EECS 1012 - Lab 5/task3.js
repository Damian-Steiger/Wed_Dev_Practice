//upon loding the screen this first action is executed
var skeletonKey = 0;
window.onload = function(){
  var button = document.getElementById('button');
  button.onclick = highlight;
}

function highlight(){
  var p = document.getElementsByClassName('paragraph');
  for (i = 0; i < 8; i++) {
    if(skeletonKey % 2 == 0){
  p[i].style.backgroundColor = "yellow";
}else{
  p[i].style.backgroundColor = null;
}
}
if(skeletonKey % 2 == 0){
document.getElementById('button').innerHTML = "Click to Unhighlight";
}else{
document.getElementById('button').innerHTML = "Click to Highlight";
}
skeletonKey++;
}
