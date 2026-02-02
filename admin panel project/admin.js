const form = document.querySelector("#form")
const input = document.querySelector("#in-name")
const role = document.querySelector("#role")
const button = document.querySelector("#button")
const devAdmin = document.querySelector("#dev-admin")
const devEditer = document.querySelector("#dev-editer")
const devUser = document.querySelector("#dev-user")


form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    const valuei = input.value;
    const roleA = role.value
    if(role.value === "Select Role"){
        alert("Please Select A Role")
    }else if(role.value === "Admin"){
        devAdmin.innerHTML +=`<div><h2>Name: ${valuei}</h2> <h3>Role: ${roleA}</h3> <button onclick="deletefun(this)">Delete</button></div>`
    }else if(role.value === "Editer"){
        devEditer.innerHTML +=`<h2>Name: ${valuei}</h2> <h3>Role: ${roleA}</h3>`
    } else if(role.value === "User"){
        devUser.innerHTML +=`<h2>Name: ${valuei}</h2> <h3>Role: ${roleA}</h3>`
    }
        

    console.log("Name: " , valuei);
    console.log("Role: " , roleA);
    
});



function deletefun(e){
    e.parentElement.remove();
}



