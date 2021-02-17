function myFunction(){
    if(document.getElementById("logo").innerHTML=="Hello There"){
        (document.getElementById("logo").innerHTML="Ethan Hart");
    }
    else if(document.getElementById("logo").innerHTML=="Ethan Hart"){
        (document.getElementById("logo").innerHTML="Hello There");
    }
    console.log("function run")
};