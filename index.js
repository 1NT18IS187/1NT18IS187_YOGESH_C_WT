let data = document.getElementById("btn");
data.addEventListener("click",()=>
{
    let e=document.getelementbyid("a").value;
    let f=document.getelementbyid("b").value;
    let c=Number(e)+Number(f);
    alert(c);
});
