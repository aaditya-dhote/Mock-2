const chkBtn = document.querySelector(".btn") ;
const outputBox = document.querySelector(".output") ;


var url="https://mystery-api.kushanksriraj.repl.co/get"

chkBtn.addEventListener("click",function final(){
fetch(url)

.then(data=>{

if(data.status===401){
    outputBox.innerText="You are not logged in"
}
// else if(data.status==="")

})

})