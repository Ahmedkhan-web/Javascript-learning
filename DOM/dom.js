// 1
document.querySelector("#message").innerHTML = "Well Come to the js";



// 2
function sendData(){
  const data =  document.querySelector("#nameInput").value;
  document.querySelector("#result").innerHTML = `<h1> ${data} </h1>`;
};



// 3
function changeColor(){
    document.querySelector("#sec").style.backgroundColor = "lightblue";
};



// 4
document.getElementById("Intro").style.color = "red"