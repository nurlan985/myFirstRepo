$(document).ready(function () {
    let game = {
        started: false,
    };
    function writeStatus(message) {
        $('#status').text(message);
    }
    function gameOver(){
        game.started = false;
        $(".boundary").addClass("youlose");
        writeStatus("Sorry, you lost. :[");
    }
    function youWin(){
        writeStatus("You WIN! :]");
        game.started = false;
    }
    function start(){
        game.started = true;
        $(".boundary").removeClass("youlose");
        writeStatus("Good luck!!!");
    }
    $("#maze").mouseleave(function(){
        if(!game.started){
            return;
        }
        gameOver();
    });
    $(".boundary").mouseover(function(){
        if(!game.started){
            return;
        }
        gameOver();
    });
    $('#start').click(function () {
        start();
    });
    $('#end').mouseover(function () {
        if(!game.started){
            return;
        }
        youWin();
    });

});