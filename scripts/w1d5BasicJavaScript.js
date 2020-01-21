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

function max(n1, n2) {
    // return (n1>n2)?n1:n2;
    if(n1>n2){
        return n1;
    }else{
        return n2;
    }
}

function click2() {
    let result = max(30, 20);
    compareVal("max(30, 20)", 30, result);
    compareVal("max(30, 20)", 20, result);
}

function maxOfThree(n1,n2,n3){
    return max(max(n1,n2), n3);
}

function click3() {
    let result = maxOfThree(30, 20, 41);
    compareVal("maxOfThree(30, 20, 41)", 41, result);
    compareVal("maxOfThree(30, 20, 41)", 30, result);
}

function isVowel(letter){
    let vowels = /^[aeiou]$/i;
    return vowels.test(letter);
}

function click4() {
    let letter = "L";
    compareVal("isVowel(\"" + letter + "\")", false,isVowel(letter));
    letter="E";
    compareVal("isVowel(\"" + letter + "\")", true,isVowel(letter));
    letter="a";
    compareVal("isVowel(\"" + letter + "\")", true,isVowel(letter));

}

function sum(arr){
    return arr.reduce((n1,n2)=>n1+n2);
}
function multiply(arr){
    let result = 1;
    arr.forEach(n=>{result *= n;});
    return result;
}
function click5() {
    let arr = [1,2,3,4,5];
    compareVal("sum(["+arr+"])", 15, sum(arr));
    compareVal("multiply(["+arr+"])", 120,multiply(arr));
}
function reverse(word) {
    // log(""+word.split(''));
    return word.split('').reduce((l1,l2)=>l2+l1);
}
function click6() {
    let word = "nurlan";
    compareVal("reverse(\""+word+"\")", "nalrun", reverse(word));
    word = "professor";
    compareVal("reverse(\""+word+"\")","rosseforp", reverse(word));
}

function findLongestWord(arr) {
    return arr.map(w=>w.length).reduce((l1,l2)=>(l1>l2?l1:l2));
}
function click7() {
    let arr = ["nurlan", "professor", "MUM"];
    compareVal("findLongestWord(["+arr+"])", 9, findLongestWord(arr));
}
function filterLongWords(arr, i) {
    return arr.filter(function (word) {
        return word.length>i;
    });
}
function click8() {
    let arr = ["nurlan", "professor", "MUM"];
    let i = 4;
    compareArrVal("filterLongWords(["+arr+"], "+i+")", ["nurlan", "professor"], filterLongWords(arr,i));
    i = 7;
    compareArrVal("filterLongWords(["+arr+"], "+i+")", ["nurlan", "professor"], filterLongWords(arr,i));
}

function multiply10(arr){
    return arr.map(e=>e*10);
}
function click9a() {
    let arr = [1,3,5,3,3];
    compareArrVal("multiply(["+arr+"])", [10,30,50,30,30], multiply10(arr));
}
function arrEqual3(arr) {
    return arr.filter(e=>e===3);
}
function click9b() {
    let arr = [1,3,5,3,3];
    compareArrVal("arrEqual3(["+arr+"])",[3,3,3],arrEqual3(arr));
    compareArrVal("arrEqual3(["+arr+"])",[3,3],arrEqual3(arr));
}
function multiplyReduce(arr) {
    return arr.reduce((e1,e2)=>e1*e2);
}
function click9c() {
    let arr = [1,3,5,3,3];
    compareVal("multiplyReduce(["+arr+"])", 135, multiplyReduce(arr));
}

function runFunctions(){
    click2();
    click3();
    click4();
    click5();
    click6();
    click7();
    click8();
    click9a();
    click9b();
    click9c();
}

{
    window.onload = runFunctions;
}