$(document).ready(function () {




    $(".logo").click(function () {
        if (this.innerHTML == "Ethan Hart") {
            $(".logo").fadeOut("slow", function () {
                this.innerHTML = "Fuck Anthoney"
            })
            $(".logo").fadeIn("slow", function () {
                return
            })
        }
        if (this.innerHTML == "Fuck Anthoney") {
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