/*jshint esversion: 6 */
(function() {
    "use strict";
    let isStarted = false;
    let speed = 250;
    let pos = 0;
    let animationArr = [];
    let animation = "Blank";
    window.onload = ()=>{
        isStarted = false;
        document.getElementById("start").onclick = startOrStop;
        document.getElementById("stop").onclick = startOrStop;
        document.getElementById("animation").onchange = cbxAnimationChanged;
        document.getElementById("turbo").onchange = chbxTurboChanged;
        document.getElementById("fontsize").onchange = cbxFontSizeChanged;

    };

    function cbxFontSizeChanged() {
        const textArea = document.getElementById("text-area");
        let fontSize = "12pt";
        switch (document.getElementById("fontsize").value) {
            case "Tiny":
                fontSize = "7pt";
                break;
            case "Small":
                fontSize = "10pt";
                break;
            case "Medium":
                fontSize = "12pt";
                break;
            case "Large":
                fontSize = "16pt";
                break;
            case "Extra Large":
                fontSize = "24pt";
                break;
            case "XXL":
                fontSize = "32pt";
                break;
        }
        textArea.style.fontSize = fontSize;
    }

    function chbxTurboChanged() {
        if(document.getElementById("turbo").checked){
            speed = 50;
        }else{
            speed = 250;
        }
    }

    function cbxAnimationChanged(e) {
        animation = document.getElementById("animation").value;
        pos = 0;
        animationArr = ANIMATIONS[animation].split("=====\n");
    }

    function startOrStop() {
        isStarted = !isStarted;
        pos = 0;
        animationArr = ANIMATIONS[animation].split("=====\n");
        document.getElementById("start").disabled = isStarted;
        document.getElementById("stop").disabled = !isStarted;

        if(isStarted){
            run();
        }
    }

    function run() {
        document.getElementById("text-area").value = animationArr[pos%animationArr.length];
        pos++;
        if(isStarted){
            setTimeout(run,  speed);
        }
    }
}());