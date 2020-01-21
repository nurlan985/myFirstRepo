function log(message) {
    console.log(message);
    let c = document.getElementById("console");
    if(c != null && c != undefined) {
        c.innerHTML += "<p>" + message.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</p>";
    }
}

function compareArrVal(description, val, result) {
    log("Expected output of " + description + " is [" + result +"]; "+ myFunctionTestArr(val, result));
}
function compareVal(description, val, result) {
    log("Expected output of " + description + " is " + result +"; "+ myFunctionTest(val, result));
}

function myFunctionTestArr(val1, val2) {
    let success = true;
    if(val1.length!==val2.length){
        success=false;
    }
    if(success) {
        for (let i = 0; i < val1.length; i++) {
            if (val1[i] !== val2[i]) {
                success = false;
                break;
            }
        }
    }
    if(success) {
        return "TEST SUCCEEDED";
    }
    let mess =  "TEST FAILED. Expected ["+val1+"] found ["+val2+"]";
    console.assert(false, mess);
    return mess;
}
function myFunctionTest(val1, val2) {
    console.assert(val1===val2, "TEST FAILED. Expected "+val1+" found "+val2);
    if(val1===val2){
        return "TEST SUCCEEDED";
    }
    return "TEST FAILED. Expected "+val1+" found "+val2;
}

function sum(arr){
    return arr.reduce((n1,n2)=>n1+n2);
}
function multiply(arr){
    return arr.reduce((accum, curVal)=>accum*curVal, 1);
}
function click4() {
    let arr = [1,2,3,4,5];
    compareVal("sum(["+arr+"])", 15, sum(arr));
    compareVal("multiply(["+arr+"])", 120,multiply(arr));
}
function reverse(word) {
    return word.split('').reduce((l1,l2)=>l2+l1);
}
function click5() {
    let word = "nurlan";
    compareVal("reverse(\""+word+"\")", "nalrun", reverse(word));
    word = "professor";
    compareVal("reverse(\""+word+"\")","rosseforp", reverse(word));
}

function filterLongWords(arr, i) {
    return arr.filter(word=> word.length>i);
}
function click7() {
    let arr = ["nurlan", "professor", "MUM"];
    let i = 4;
    compareArrVal("filterLongWords(["+arr+"], "+i+")", ["nurlan", "professor"], filterLongWords(arr,i));
    i = 7;
    compareArrVal("filterLongWords(["+arr+"], "+i+")", ["nurlan", "professor"], filterLongWords(arr,i));
}

   window.onload =  function(){
       "use strict";
       click4();
       click5();
       click7();
}