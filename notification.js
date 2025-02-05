let dark = document.querySelector("#mod2");
let body = document.querySelector("body");
let light = document.querySelector("#mod1");
let currmode = "light";

dark.addEventListener("click", () =>{
    if( currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else{
        currmode = "light";
    }
});

light.addEventListener("click", () => {
    if (currmode === "dark"){
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    } else{
        currmode = "dark";
    }
});



$(document).ready(function(){
    $("#sengine").on("keyup",function(){
        var value = $(this).val().toLowerCase();
        $("#scontent li ").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        });
    });
});


function myfunction(){
    let pop_up = document.getElementById("pop_up");
     let none = "none";
    if(pop_up.style.display === none){
        pop_up.style.display = "block";
    } else {
        pop_up.style.display = "none";
    }
};

function msg(){
    let message = document.getElementById("message");
     let none = "none";
    if(message.style.display === none){
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
};


 $('.drop_down_area > a').click(function(){
     $('.drop_down').slideToggle();
 });