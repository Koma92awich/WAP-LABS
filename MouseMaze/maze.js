/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var win = true;

(function(){
    
$(document).ready(function(){
   
   $("#start").click(function(){
       
       $(".boundary").removeClass("youlose");
       $("#status").text("Start moving");
       
       
       $(".boundary").on("mouseenter",function(){
           
           $(".boundary").addClass("youlose");
           $("status").text("You lose:(");
       });
       
       $("#maze").on("mouseleave",function(){
           $(".boundary").addClass("youlose");
           $("status").text("You lose:(");
           $("end").off("mouseover");
           
       });
       
       $("#end").on("mouseover",function(){
           $("status").text("You win!");
           $(".boundary").off("mouseenter");
           $("#maze").off("mouseleave");
           
       });
       
       
       
       
       
   });
    
    
    
});

})();