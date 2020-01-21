/*jshint esversion: 6 */
window.onload = function () {
    "use strict"
    document.getElementById("btn").onclick = btnClick;

    const btnIgpay = document.getElementById("igpay");
    btnIgpay.onclick = btnIgpayClick

    document.getElementById("malkovitch").onclick = ()=>{
        let text = document.getElementById("text");
        let arr = text.value.split(" ");
        arr = arr.map(w=>w.length>=5?"Malkovitch":w);
        text.value = arr.reduce((w1,w2)=>w1+" "+w2);
    };
    document.getElementById("bling").onchange =blingOnChanged;

    function btnClick() {
        setInterval(upFontSize, 500);
    }
    function upFontSize(e){
        const text = document.getElementById("text");
        let fontSize = parseInt(window.getComputedStyle(text).fontSize);
        fontSize+=2;
        text.style.fontSize = fontSize + "pt";
    }
    function blingOnChanged() {
        let text = document.getElementById("text");
        if(document.getElementById("bling").checked){
            text.classList.add("decorate-text-bling");
            document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
        }else{
            text.classList.remove("decorate-text-bling");
            document.body.style.backgroundImage= "";
        }
    }

    function isVowel(letter){
        let vowels = /^[aeiou]$/i;
        return vowels.test(letter);
    }
    function btnIgpayClick() {
        let text = document.getElementById("text");
        let arr = text.value.split(' ');
        let newArr = [];
        for(let t of arr){
            if(t.trim().length === 0){
                newArr.push(t);
                continue;
            }
            let count = t.length;
            while (!isVowel(t[0]) && /[a-zA-Z]/.test(t[0]) && count>0){
                let newT = t.substring(1);
                t = newT+t[0];
                count--;
            }
            t+="-ay";
            newArr.push(t);
        }
        text.value = newArr.reduce((e1,e2)=>e1+" "+e2);
    }

};