  /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


"use strict";
window.onload = function () {
    //let ANIMATIONS = [];

    document.getElementById("fontsize").onchange = function () {
        document.getElementById("tx").style.fontSize = document.getElementById("fontsize").value;

    };

    document.getElementById("animation").onchange = function () {
        document.getElementById("tx").value = ANIMATIONS[document.getElementById("animation").value];
        ;
    };

    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("turbo").onclick = turboMode;

};


var timer = null;
var framesCout = 0;
var animationArrFrames = [];

function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    document.getElementById("stop").disabled = false;
    animationArrFrames = document.getElementById("tx").value.split("=====\n");
    if (timer === null) {
        if (document.getElementById("turbo").checked) {
            timer = setInterval(draw, 50);
        } else {
            timer = setInterval(draw, 250);
        }
    }
}

function stop() {
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(timer);
    timer = null;
    document.getElementById("tx").value = animationArrFrames.join("=====\n");
    framesCout = 0;
}


function turboMode() {
    var status = document.getElementById("turbo");
    if (timer !== null) {
        if (status.checked) {
            clearInterval(timer);
            timer = setInterval(draw, 50);
        } else {
            clearInterval(timer);
            timer = setInterval(draw, 250);
        }
    }
}

function draw() {
    var txtArea = document.getElementById("tx");

    if (framesCout < animationArrFrames.length) {
        txtArea.value = animationArrFrames[framesCout];
        framesCout++;
    } else {
        txtArea.value = animationArrFrames[0];
        framesCout = 1;
    }
}
