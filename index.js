const inputer = document.querySelector(".inputBox");
const loginer = document.querySelector(".buttonBox");
const outputer = document.querySelector(".outputBox");

function final(){
    var psLt = inputer.value.length ;
    
    if(psLt<10){
       loginer.style.color = "red";
outputer.innerText=""
    }
    else{
    loginer.style.color = "green";
    }
    
}



loginer.addEventListener("click",final)