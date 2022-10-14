const inputs= document.querySelector(".inputText");
const logs = document.querySelector(".log");
const wons= document.querySelector(".won");
const errors= document.querySelector(".error");
const outputs= document.querySelector(".output");

logs.addEventListener("click",function lg(){
outputs.innerText = inputs.value ;
outputs.style.color="black";
})

wons.addEventListener("click",function wn(){
    outputs.innerText = inputs.value ;
    outputs.style.color="yellow";
    })

   errors.addEventListener("click",function err(){
        outputs.innerText = inputs.value ;
        outputs.style.color="red";
        })