
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
    let t = $text.val();
    if(t.length>0){
        if(!isVowel(t[0])){
            let newText = t.substring(1);
            $text.val(newText+t[0]);
        }
    }
    $text.val($text.val()+"ay");
}

function btnMalkovitch() {
    const $text = $("#text");
    let arr = $text.val().split(" ");
    arr = arr.map(w=>w.length>=5?"Malkovitch":w);
    $text.val(arr.reduce((w1,w2)=>w1+" "+w2));
}