/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function () {
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


//var accountDetails = (function(){
//    
//return {
//    
//    accountCreated: function(accName,deposit ){
//        this.accName = accName;
//        this.deposit = deposit;
//    },
//    
//    print:function (){
//        return "Account Name :" +this.accName + "  Balace : " + this.deposit;
//    }
//    
//    
//} ;   
//    
//});
//
//
//
//windows.onload = function(){
//    
//    var form = document.getElementById("form");
//    var textArea = document.getElementById("textArea");
//    var accountInfoList = [];
//    var addAcc;
//    
//    form.onsubmit = submit;
//    
//   function submit() {
//        var name = document.getElementById("accountName").value;
//        var balance = document.getElementById("deposit").value;
//        
//        addAcc = accountDetails();
//        
//        addAcc.accountCreated(name, balance);
//        
//        accountInfoList.push(addAcc);
//        
//        var showAccs = "";
//        for (var i = 0; i < accountInfoList.length; i++) {
//            showAccs += accountInfoList[i].print() + "\n";
//        }
//        textArea.value = showAccs;
//        form.reset();
//        return false;
//        
//    }
//};


var accountModule = (function () {

    return {
        createAccount: function (accountName, deposit) {
            this.accountName = accountName;
            this.deposit = deposit;
        },
        print : function(){
            return "Account name : " + this.accountName + "    Balance : " + this.deposit;
        }
    };
});



    var form = document.getElementById("form");
    var textArea = document.getElementById("textArea");
    var accountInfoList = [];
    var addAcc;

    form.onsubmit = submit;

    function submit() {
        var name = document.getElementById("accountName").value;
        var balance = document.getElementById("deposit").value;

        addAcc = accountModule();
        addAcc.createAccount(name , balance);
        accountInfoList.push(addAcc);

        var showAccs = "";
        for (var i = 0; i < accountInfoList.length; i++) {
            showAccs += accountInfoList[i].print() + "\n";
        }
        textArea.value = showAccs;
        form.reset();
        return false;
    }
};

