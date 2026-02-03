const form = document.querySelector("#form");
const input = document.querySelector("#in-name");
const role = document.querySelector("#role");
const button = document.querySelector("#button");

const devAdmin = document.querySelector("#dev-admin");
const devEditer = document.querySelector("#dev-editer");
const devUser = document.querySelector("#dev-user");

let editTarget = null; 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = input.value.trim();
    const roleA = role.value;

    if (name === "") {
        alert("Please Enter Name");
        return;
    }

    if (roleA === "Select Role") {
        alert("Please Select A Role");
        return;
    }

    if (editTarget) {
        editTarget.querySelector("h2").innerText = `Name: ${name}`;
        editTarget.querySelector("h3").innerText = `Role: ${roleA}`;

        moveCard(editTarget, roleA);

        button.innerText = "Submit";
        editTarget = null;
    }
    else {
        const card = document.createElement("div");
        card.innerHTML = `
            <h2>Name: ${name}</h2>
            <h3>Role: ${roleA}</h3>
            <button onclick="editfun(this)">Edit</button>
            <button onclick="deletefun(this)">Delete</button>
        `;

        moveCard(card, roleA);
    }

    input.value = "";
    role.value = "Select Role";
});

function deletefun(btn) {
    btn.parentElement.remove();
}

function editfun(btn) {
    editTarget = btn.parentElement;

    const nameText = editTarget.querySelector("h2").innerText.replace("Name: ", "");
    const roleText = editTarget.querySelector("h3").innerText.replace("Role: ", "");

    input.value = nameText;
    role.value = roleText;

    button.innerText = "Upgrade";
}

function moveCard(card, role) {
    card.remove();

    if (role === "Admin") devAdmin.appendChild(card);
    else if (role === "Editer") devEditer.appendChild(card);
    else if (role === "User") devUser.appendChild(card);
}
