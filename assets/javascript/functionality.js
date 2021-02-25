
$(document).ready(function(){
    $(".p").hide()



    $(".logo").click(function(){
            if(this.innerHTML=="Ethan Hart"){
                $(".logo").fadeOut("slow", function(){
                this.innerHTML="Hello There"
              })
                $(".logo").fadeIn("slow", function(){
                    return
                })
            }
            if(this.innerHTML=="Hello There"){
                $(".logo").fadeOut("slow", function(){
                    this.innerHTML="Ethan Hart"
                })
                $(".logo").fadeIn("slow", function(){
                    return
                })
              }
    });

    function fade(){
        $(".p").fadeIn("slow",function(){
            return
        })
    }


    setTimeout(fade, 1000)







  });