/* Lab 6 - Task 1 */
/* add your code here. Recommend you use the prototype library */
/* There is a local copy in your folder */
var skeletonKey = null;
window.onload = function()
{
  newImage;
  $("myImg").observe("mouseover", newImage);
}

function newImage(){
  var imgArray = ["face1.png", "face2.png", "face3.png", "face4.png"];
  var i = Math.floor(Math.random() * 4);
    while(i == skeletonKey){
       i = Math.floor(Math.random() * 4);

  }
  $("myImg").src = imgArray[i]; 
   skeletonKey = i;
}
