
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