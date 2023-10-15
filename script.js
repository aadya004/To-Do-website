const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function add()
{
    document.getElementById("input").style.display="inline";
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    inputbox.value="";
}
listcontainer.addEventListener("click",function(e){
    if (e.target.tagname==="li") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagname==="span"){
        e.target.parentElement.remove();
    }
},false);