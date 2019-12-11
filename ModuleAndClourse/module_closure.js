/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var timer = null;// stores ID of the interval timer

var rudyTimer = (function (){
    
    if(timer === null){
        
        timer = setInterval(rudy,1000);
    }else{
        
        clearInterval(timer);
        timer = null;
    }
    
    function rudy(){
        
        document.getElementById("dis").innerHTML += "Rudy!"; 
    }
    } );


var accountDetails = (function(){
    
return {
    
    accountCreated: function(accName,deposit ){
        this.accName = accName;
        this.deposit = deposit;
    },
    
    print:function (){
        return "Account Name :" +this.accName + "  Balace : " + this.deposit;
    }
    
    
} ;   
    
});



windows.onload = function(){
    
    //document.getElementById("shw").onclick = rudyTimer();
};


