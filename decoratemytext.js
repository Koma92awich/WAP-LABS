/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    
    document.getElementById("deco").onclick = changeSize;
    document.getElementById("checked").onchange = blingCheckBox;
    document.getElementById("clickme").onclick = biggerFont;
};


 //const fontSize =  parseInt(getComputedStyle(document.getElementById("tx")).getPropertyValue('font-size')); 
//var f1 = 0;
//var i = 2;
function popup(){
    alert("Hello World");
}


function changeSize(){
    event.preventDefault();
    var size = document.getElementById("tx").style.fontSize;
    var bigger = parseInt(size.substring(size.length - 2, 0));
    
    bigger += 2;
    document.getElementById("tx").style.fontSize = bigger + "pt";
    
     //f1 = fontSize+ i; i+= 2;
  //document.getElementById("txt").style.fontSize = f1 +"pt";
}

function blingCheckBox(){
   
if(document.getElementById("checked").checked === true){
        document.getElementById("tx").style.fontWeight = "bold";
        document.getElementById("tx").style.color = "green";
        document.getElementById("tx").style.textDecoration = "underline";        
        onchange();
    }else if(document.getElementById("checked").checked === false){ 
        document.getElementById("tx").style.fontWeight = "normal";        
        document.getElementById("tx").style.color = null;
        document.getElementById("tx").style.textDecoration = null;                
        onchange();        
    }
}

function onchange(){
    alert("Bling Checked, uncheck to go back to normal color");
}