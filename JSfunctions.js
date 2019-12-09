/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function firstjs() {
  alert("You Clicked Me");
}

function CalculateTip(){
    
   var amount = parseInt(document.getElementById("subtotal").value);
    var tipped = parseInt(document.getElementById("tip").value);
    
    var percent = (tipped/100)*amount;
     var pay = amount + percent;
    
    document.getElementById("total").innerHTML = "$" + pay;
    
    
}

function somethingElse() {
    if (5 > 2) {
        alert("Bigger");
    }    
    if (5 < 2) {
        alert("Smaller");
    }
}

window.onload = function(){
    var okButton = document.getElementById("ok");
     okButton.onclick = gogogo;  
};

function okayClick() {
alert("booyah");
}



/*function gogogo() {
var clickMe = document.getElementById("ok");
clickMe.style.color = "red";
}*/

function gogogo() {
    alert("Yay, it works!");
}


