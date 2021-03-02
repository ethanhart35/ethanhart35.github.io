$(document).ready(function () {




    $(".logo").click(function () {
        if (this.innerHTML == "Ethan Hart") {
            $(".logo").fadeOut("slow", function () {
                this.innerHTML = "Hello There"
            })
            $(".logo").fadeIn("slow", function () {
                return
            })
        }
        if (this.innerHTML == "Hello There") {
            $(".logo").fadeOut("slow", function () {
                this.innerHTML = "Ethan Hart"
            })
            $(".logo").fadeIn("slow", function () {
                return
            })
        }
    });

    $(".p").hide();
    $(".about").hide();

    function fade() {

        $(".about").fadeIn("slow", function(){
            $(".p").fadeIn("slow", function (){
            
            })
        })

        
    }


    setTimeout(fade, 500)







});