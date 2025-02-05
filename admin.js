let circularprogress = document.querySelector(".circular_progress1");
let pvalue = document.querySelector(".p-value");

let startvalue = 0;
let endvalue = 80;
speed = 30;

let progress = setInterval(()=>{
    startvalue++;
    pvalue.textContent= startvalue+"%"
    circularprogress.style.background= `conic-gradient(deeppink ${startvalue * 3.6}deg, lightgrey 0deg)`
    
    if(startvalue == endvalue){
        clearTimeout(progress);
    }
},speed);

let circularprogresstwo = document.querySelector(".circular_progress2");
let pvaluetwo = document.querySelector(".p-value2");

let startvaluetwo = 0;
let endvaluetwo = 79;
speedtwo = 30;

let progresstwo = setInterval(()=>{
    startvaluetwo++;
    pvaluetwo.textContent= startvaluetwo+"%"
    circularprogresstwo.style.background= `conic-gradient(#BF77F6 ${startvaluetwo * 3.6}deg , lightgrey 0deg)`
    
    if(startvaluetwo == endvaluetwo){
        clearTimeout(progresstwo);
    }
},speedtwo);

let circularprogressthree = document.querySelector(".circular_progress3");
let pvaluethree = document.querySelector(".p-value3");

let startvaluethree = 0;
let endvaluethree = 52;
speedthree = 30;

let progressthree = setInterval(()=>{
    startvaluethree++;
    pvaluethree.textContent= startvaluethree+"%"
    circularprogressthree.style.background= `conic-gradient(skyblue ${startvaluethree * 3.6}deg , lightgrey 0deg)`
    
    if(startvaluethree == endvaluethree){
        clearTimeout(progressthree);
    }
},speedthree);


let ctx = document.getElementById("myChart");

let myChart = new Chart(ctx, {
    type:"bar",
    data:{
        labels:[" "," "," "," "," "," "," "," "],
        datasets:[
        {
        data:[42,33,48,40,45,35,42,30],
        borderRadius: 25,
        backgroundColor:["deeppink","#BF77F6","deeppink","#BF77F6","deeppink","#BF77F6","deeppink","#BF77F6"],
    },
        ],
    },
     options:{
         responsive:false,
         layout:{
             padding:{
                 left:18,
             },
         },
         plugins:{
            tooltip:{
            enabled: true,
            backgroundColor: "blue",
            bodyFont:{
                size:12,
            },
             },
         },
         animation:{
                 duration:1000,
                 easing:"easeInOutBounce",
             },
     },
});


let bc = document.getElementById("barChart");
let barChart = new Chart(bc,{
    type:"bar",
    data:{
        labels:[" ", " ","January"," "," ","February"," "," "," ","March"," "," ","April"," "," ","May"," "," "," ","June"," "," ","July"," "," "," ","August"," "," ","September"," "," ","October"," "," ","November"," "," "," ","December"],
        datasets:[
            {
                data:[13,24,26,37,36,40,30,22,12,13,19,27,17,20,25,30,45,36,45,15,26,20,14,16,12,11,20,26,30,26,40,30,33,34,25,20,15,20,30,35],
                borderRadius:25,
                backgroundColor:["#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE","#00CDFE"],
            },
        ],
    },
    
    options:{
        responsive:false,
        layout:{
            padding:{
                left:15,
                right:35,
                top:2,
                bottom:2, 
            },
        },
        plugins:{
            tooltip:{
                enabled:true,
            },
        },
        animation:{
            duration:2000,
            easing:"easeInOutBounce",
        },
    },
    
});



let option = "";

let monthname = ["This Month","January","February","March","April","May","June","July","August","September","October","November","December"];

for(let a = 0 ; a<monthname.length ; a++){
    option += "<option>"+monthname[a]+"</option>"
}

document.getElementById("select_option").innerHTML=option;


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


let table = new DataTable('#mytable', {
	
});

                   
                      





