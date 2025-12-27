const amount = document.querySelector("#amount");
const item = document.querySelector("#item");
const detail = document.querySelector("#detail");
const data = document.querySelector("#data");

function datarender(){
    data.innerHTML += `<div>
                        <strong>${item.value}</strong>
                        Amount: ${amount.value} |
                        ${detail.value}
<button onclick="editItem(this)">Edit</button>
<button onclick="deleteItem(this)">Delete</button>
                        </div>`
}

function deleteItem(btn){
    btn.parentElement.remove()
}
function editItem(){
    
}