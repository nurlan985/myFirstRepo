
function btnClick() {
    let $text = $("#text");
    setInterval(upFontSize, 500, $text);
}
function upFontSize(e){
    let size = parseInt(e.css("font-size"));
    size+=2;
    e.css("font-size", size + "pt");
}
function blingOnChanged() {
    const $text = $("#text");
    const $body = $("body");
    if(document.getElementById("bling").checked){
        $text.addClass("decorate-text-bling")
        $body.css("background-image","url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)");
    }else{
        $text.removeClass("decorate-text-bling")
        $body.css("background-image","");
    }
}

function isVowel(letter){
    let vowels = /^[aeiou]$/i;
    return vowels.test(letter);
}
function btnIgpay() {
    const $text = $("#text");
    let arr = $text.val().split(' ');
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
    $text.val(newArr.reduce((e1,e2)=>e1+" "+e2));
}

function btnMalkovitch() {
    const $text = $("#text");
    let arr = $text.val().split(" ");
    arr = arr.map(w=>w.length>=5?"Malkovitch":w);
    $text.val(arr.reduce((w1,w2)=>w1+" "+w2));
}