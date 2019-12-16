/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    var TILE_SIZE = 100;
    var ROWS = 4;
    var emptyX = 3 * TILE_SIZE;
    var emptyY = 3 * TILE_SIZE;
    var SHAFFLE_TIMES = 100;

    var init = function() {
        // initialize each piece
        $("#puzzlearea > div").each(function(index,element){
            // calculate x and y for this piece
            var x = ((index % 4) * 100) ;
            var y = (Math.floor(index / 4) * 100) ;

            console.log("item: "+index+" x: "+x+" y: "+y);

            // set basic style and background
            $(element)
                .addClass("puzzlepiece")
                .addClass("tail")
                .css({
                        "left": x + 'px',
                        "top":  y + 'px',
                        "background-image": 'url("background.jpg")',
                        "background-position": -x + 'px ' + (-y) + 'px'
                    })
                .attr("id",x+"_"+y)
                .attr("x",x)
                .attr("y",y);
        });
    };

    init();

    $("#puzzlearea > div").click(function(){
        var x = parseInt($(this).css("left"));
        var y = parseInt($(this).css("top"));
        if(canMove(x,y,emptyX,emptyY))
            move(this);
    });

    $("#shufflebutton").click(function () {
        setTimeout(shuffle,160);
    });

    $("#puzzlearea > div").hover(function(){
        var x = parseInt($(this).css("left"));
        var y = parseInt($(this).css("top"));
        if(canMove(x,y,emptyX,emptyY))
            $(this).addClass("hovered");

    }, function(){
        $(this).removeClass("hovered");
    });

    var move = function(element){
        console.log("moving "+$(element).attr("id"));
        var tmpX = parseInt($(element).css("left"));
        var tmpY = parseInt($(element).css("top"));
        $(element).css({"left":emptyX+'px', "top": emptyY+'px'});
        emptyX = tmpX;
        emptyY = tmpY;
    };

    function getElement (x,y){
        return $("#"+x+"_"+y);
    }

    // Can move only if there is a change in only one of x or y
    function canMove(x1,y1, x2,y2){
        var x = Math.abs(x1 - x2) / 100; // divide to turn into steps
        var y = Math.abs(y1 - y2) / 100; // divide to turn into steps
        return (x === 1 && y === 0) || (x === 0 && y === 1) ;
    }

    var shuffle = function(){
        var x = 0;
        var y = 0;
        var n = SHAFFLE_TIMES;
        while(n>0){
            x = (Math.floor(Math.random() * 4) + 1) - 1;
            y = (Math.floor(Math.random() * 4) + 1) - 1;
            while(x<(ROWS*TILE_SIZE)){
                while(y<ROWS*TILE_SIZE){
                    var element = getElement(x,y);
                    if($(element).attr("id") !== undefined)
                        move(element);
                    y+=TILE_SIZE;
                }
                y = 0;
                x+=TILE_SIZE;
            }
            n--;
        }
    };

});

