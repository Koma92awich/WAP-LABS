/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    
    var makeBig =   document.getElementById("deco");
    document.getElementById("checked").onchange = blingCheckBox;
    var piglatin = this.document.getElementById("piglatin");
    var malkovith=this.document.getElementById("malkovith");
    var mytextarea = document.getElementById("tx");
    var timer = null;
    
     function checkIfVowel(letter) {
        var l = letter.toLowerCase();
        return l === 'a' || l === 'e' || 
        l === 'i' || l === 'o' || l === 'u';
    }

    function pigLatinizeWord(word) {
        var firstLetter = word.substring(0,1);
        
        if(!checkIfVowel(firstLetter)) {
            var consonantClusterSize = 1;
            for(var i = 1; i < word.length; ++i) {
                var letter = word.substring(i, i+1);
                if(!checkIfVowel(letter)) {
                    consonantClusterSize++;
                } else {
                    break;
                }
            }
            word = word.substring(consonantClusterSize, word.length).trim() + word.substring(0,consonantClusterSize);
        }
        return word.trim() + "ay ";
     }
    
    piglatin.onclick=function () {
//        var val = mytextarea.value.toLowerCase();
//        if(val[0]=="a"||val[0]=="e"||val[0]=="i"||val[0]=="o"||val[0]=="u"){
//            mytextarea.value=val+"-ay";
//        }
//        else{
//            mytextarea.value=val.substring(1,val.length)+val[0]+"-ay";
//        }

 var originalText = mytextarea.value;
        var newText = "";
        var nextWord = "";
        for(var i = 0; i < originalText.length; ++i) {
            var letter = originalText.substring(i, i+1);
            nextWord += letter;
            if(letter === ' ' || letter === '\n' || i >= originalText.length-1) {
                nextWord = pigLatinizeWord(nextWord);
                newText += nextWord;
                nextWord = "";
            }
        }
        mytextarea.value = newText;
   };
    
    malkovith.onclick=function(){
//        var val=mytextarea.value;
//        if( val.length>=5){
//            mytextarea.value= "malkovith";
//        }
        
        var originalText = mytextarea.value;
        var newText = "";
        var nextWord = "";
        for(var i = 0; i < originalText.length; ++i) {
            var letter = originalText.substring(i, i+1);
            alert(letter);
            nextWord += letter;
         //   if(letter === ' ' || letter === '\n' || i >= originalText.length-1) {
                if(nextWord.trim().length >= 5)
                    nextWord = "Malkovitch ";
                newText += nextWord;
                nextWord = "";
          //  }
        }
        mytextarea.value = newText;
        
        
        

    };
    
  // function delayTime () {
    makeBig.onclick = function(){
  if (timer === null) {
    timer = setInterval(change, 500);
  } else {
    clearInterval(timer);
    timer = null;
  }
};
    
    
   // makeBig.onclick = function(){
        function change(){
//    event.preventDefault();
    
    var big = parseInt(getComputedStyle(document.getElementById("tx")).getPropertyValue("font-size"));
    
    var bigger =  parseInt(big) + 2;
   // alert(bigger);
    
    document.getElementById("tx").style.fontSize = bigger + "pt";

//var m = window.getComputedStyle(mytextarea).fontSize;
//        if (m == "16px")
//            m = Number.parseInt(window.getComputedStyle(mytextarea).fontSize) * (3 / 4) + 2 + "pt";
//        else
//            m = Number.parseInt(window.getComputedStyle(mytextarea).fontSize) + 2 + "pt";
//
//        mytextarea.style.fontSize = m;
 

};


   
};

function popup(){
    alert("Hello World");
}


function blingCheckBox(){
   
if(document.getElementById("checked").checked === true){
        document.getElementById("tx").style.fontWeight = "bold";
        document.getElementById("tx").style.color = "green";
        document.getElementById("tx").style.textDecoration = "underline"; 
        document.getElementById("tx").style.textAlign = "right";
        document.getElementById("bod").style.backgroundImage="url(\"http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg\")";
        onchange();
    }else if(document.getElementById("checked").checked === false){ 
        document.getElementById("tx").style.fontWeight = "normal";        
        document.getElementById("tx").style.color = "";
        document.getElementById("tx").style.textDecoration = "none"; 
        document.getElementById("bod").style.backgroundImage="";
        onchange();        
    }
}

function onchange(){
    alert("Bling Checked, uncheck to go back to normal color");
}

//var timer = null;
