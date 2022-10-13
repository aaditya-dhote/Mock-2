const chkBtn= document.querySelector(".btn");
const outputer= document.querySelector(".output");

var url = "https://api.coindesk.com/v1/bpi/currentprice.json";



chkBtn.addEventListener("click",function final(){

    fetch(url)
    .then((response)=>response.json())
    .then(json=>console.log(json));

   console.log(json);

})