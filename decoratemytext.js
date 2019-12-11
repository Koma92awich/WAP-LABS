/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    
    document.getElementById("deco").onclick = 
    document.getElementById("checked").onchange = blingCheckBox;
   
};

function popup(){
    alert("Hello World");
}
function changeSize(){
    event.preventDefault();
    
    var big = parseInt(getComputedStyle(document.getElementById("tx")).getPropertyValue("font-size"));
    
    var bigger =  parseInt(big) + 2;
    document.getElementById("tx").style.fontSize = bigger + "pt";
 

}

function blingCheckBox(){
   
if(document.getElementById("checked").checked === true){
        document.getElementById("tx").style.fontWeight = "bold";
        document.getElementById("tx").style.color = "green";
        document.getElementById("tx").style.textDecoration = "underline"; 
        document.getElementById("tx").style.textAlign = "right";
        onchange();
    }else if(document.getElementById("checked").checked === false){ 
        document.getElementById("tx").style.fontWeight = "normal";        
        document.getElementById("tx").style.color = "null";
        document.getElementById("tx").style.textDecoration = "null";                
        onchange();        
    }
}

function onchange(){
    alert("Bling Checked, uncheck to go back to normal color");
}

var timer = null;
function delayMsg() {
    
  if (timer === null) {
    timer = setInterval(changeSize, 5000);
  } else {
    clearInterval(timer);
    timer = null;
  }
}