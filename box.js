let safe=document.getElementById("green");
let notdanger=document.getElementById("blue");
let danger=document.getElementById("red");

safe.addEventListener("click",(e)=>
{
    e.stoppropogation();
   alert("safe-zone");
    
});

notdanger.addEventListener("click",(e)=>
{
    e.stoppropogation();
    alert("not-safe-zone");
    
});


danger.addEventListener("click",(e)=>
{
    e.stoppropogation();
    alert("danger zone");
    
});


