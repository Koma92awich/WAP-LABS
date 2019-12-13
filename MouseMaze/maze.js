/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var win = true;

$(document).ready(function(){
   // $("#maze.boundary").mouseover(red);
    $("#start").mouseover(function(){
    
    $("h1").text("you have started");
  });
    $("#end").mouseover(function(){
        $("h2").text("you have won");
    });
   
   // $("#test").click(function(){
   //     alert("fin");
   // });
    
    
    
    
});