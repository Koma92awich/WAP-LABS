/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    
    document.getElementById("deco").onclick = changeSize;
    document.getElementById("checking").onchange = blingCheckBox;
    document.getElementById("clickme").onclick = biggerFont;
};

function popup(){
    alert("Hello World");
}

function changeSize(){
    //document.getElementById("tx").style.fontSize = "24pt";
    event.preventDefault();
    var size = document.getElementById("tx").style.fontSize;
    var bigger = size.substring(size.length - 2, 0);
   
    bigger += 2;
    document.getElementById("tx").style.fontSize = bigger + "pt";
}

function biggerFont() {
//var size =
//parseInt(document.getElementById("clickme").style.fontSize);
  var size = parseInt($("#clickme").css('font-size'));
  alert(size);
size += 4;
document.getElementById("clickMe").style.fontSize = size + "pt";
}



function blingCheckBox(){
   // alert("checked");
  // if(document.getElementById(""))
    document.getElementById("tx").style.fontWeight = "bold";
     document.getElementById("tx").style.color = "green";
      document.getElementById("tx").style.textDecoration = "underline";
    
}