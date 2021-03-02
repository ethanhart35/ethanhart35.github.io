

$(document).ready(function () {




    $(".logo").click(function () {
        if (this.innerHTML == "Ethan Hart") {
            $(".logo").fadeOut("slow", function () {
                this.innerHTML = "Hello"
            })
            $(".logo").fadeIn("slow", function () {
                return
            })
        }
        if (this.innerHTML == "Hello") {
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
        $(".about").fadeIn("slow", function () {
        })
    }
    function aboutMe(){
        $(".aboutUnderline").css({"margin-left":"33%","margin-right":"33%","width":"33%","opacity":"50%","transition":".6s ease-in-out"})
    }
    function paragraph(){
        $(".p").fadeIn("slow", function(){

        })
    }

    setTimeout(fade, 500)
    setTimeout(aboutMe,1000)
    setTimeout(paragraph,1700)
});