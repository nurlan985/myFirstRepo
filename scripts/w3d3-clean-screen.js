$(function () {
    let cleanScreenData = {
        timer: null
    };

    /**
     * This function for get value from element by Id
     * @param id - element Id
     * @returns value from element
     */
    function getValue(id) {
        return $("#"+id).val();
    }

    /**
     * Random integer
     * @param max - maximum number which can be returned
     * @returns random number between 0 and max
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * this function return random color. I used it for set background-color for circle. In this function I used getRandomInt function
     * @returns randomised color.
     */
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[getRandomInt(16)];
        }
        return color;
    }
    /**
     * function if mouse is move in circle this circle will get low opacity, if opacity is zero or less circle will be removed.
     * @param event
     */
    function mousemove(event) {
        $(this).css(
            "opacity", function (indx, oldVal) {
                let newVal = oldVal - 0.01;
                if(newVal<=0){
                    this.remove();
                }
                return newVal;
            }
        );
    }

    /**
     * this function is callBack function for setInterval. every calling this function do greater every circle for settled growthAmount
     */
    function growCircle() {
        let growthAmount = getValue("growthAmount");
        function grow(idx, oldValue){
            let newVal = (parseInt(oldValue)+parseInt(growthAmount));
            return newVal+"px";
        }
        $(".circle").css("width", grow);
        $(".circle").css("height", grow);
        $(".circle").css("border-radius", function(idx, oldValue) {
            return parseInt(oldValue)+growthAmount/2+"px";
        });
        function move(idx, oldValue) {
            return parseInt(oldValue)-growthAmount/2+"px";
        }
        $(".circle").css("top", move);
        $(".circle").css("left", move);
    }

    /**
     * this function crete new completely ready circle and return.
     * @returns circle object
     */
    function getNewCircle() {
        return $("<div>",{
            "click": function () {this.remove();},
            "mousemove": mousemove,
            "class": "circle",
            "css":{
                "background-color": getRandomColor(),
                "top": getRandomInt(500)+"px",
                "left": getRandomInt(1600)+"px"
            }
        });
    }

    /**
     * this function for create circles and start growing this circles. When I create circles I push it to array and all circles append to main div, not one by one.
     */
    function start(){
        if(cleanScreenData.timer!=null){
            clearInterval(cleanScreenData.timer);
        }
        let count = getValue("circleCount");
        let $circles = [];
        for(let i = 0; i < count; i++){
            $circles.push( getNewCircle());
        }
        $(".circle-container").append($circles);
        cleanScreenData.timer = setInterval(growCircle, getValue("growRate"));
    }

    /**
     * binding start function to button start.
     */
    $("#start").on("click", start);
});