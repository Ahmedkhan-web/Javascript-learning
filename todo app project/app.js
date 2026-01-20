const input = document.getElementById("input");
const div = document.getElementById("div");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  div.innerHTML += `
    <div class="item">
      <h2>${input.value}</h2>
      <button type="button" onclick="editItem(this)">Edit</button>
      <button type="button" onclick="deleteItem(this)">Delete</button>
    </div>
  `;

  input.value = "";
});

function deleteItem(btn) {
  btn.parentElement.remove();
}

function editItem(btn){
  const h2 = btn.parentElement.querySelector("h2");

  const oldText = h2.textContent;

  const newText = prompt("Edit text:" , oldText);

  if (newText === null || newText.trim() === "") return;
  h2.textContent = newText;
}