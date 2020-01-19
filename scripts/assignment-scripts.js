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
