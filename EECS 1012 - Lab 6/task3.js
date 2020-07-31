/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */
 window.onload = function insertInformation(){
   var list1 = $("days");
   var list2 = $("months");
   var list3 = $("years");
   var list1OptionArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var list2OptionArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for(var a = 0 ; a < 6 ; a++){
          var list1Option = document.createElement("option");
          list1Option.innerHTML = list1OptionArray[a];
          list1.appendChild(list1Option);
        }
      for(var b = 0 ; b < 12 ; b++){
          var list2Option = document.createElement("option");
          list2Option.innerHTML = list2OptionArray[b];
          list2.appendChild(list2Option);
      }
      for(var c = 0 ; c < 48 ; c++){
          var list3Option = document.createElement("option");
          list3Option.innerHTML =  1970 + c ;
          list3.appendChild(list3Option);
   }
 }
