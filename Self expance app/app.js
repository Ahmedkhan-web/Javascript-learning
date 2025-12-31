const amount = document.querySelector("#amount");
const item = document.querySelector("#item");
const detail = document.querySelector("#detail");
const card = document.querySelector("#card");
const total = document.querySelector("#total");

let totalExpense = 0;

const selfFinanceItems = [
  "Food",
  "Groceries",
  "Travel",
  "Transport",
  "Rent",
  "Electricity Bill",
  "Water Bill",
  "Internet Bill",
  "Mobile Recharge",
  "Shopping",
  "Clothing",
  "Medical",
  "Education",
  "Entertainment",
  "Dining Out",
  "Fuel",
  "Gym",
  "Subscriptions",
  "Gifts",
  "Savings"
];

selfFinanceItems.forEach((financeItem) => {
  item.innerHTML += `<option value="${financeItem}">${financeItem}</option>`;
});

function getCurrentDate() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

function renderItem() {
  const itemValue = item.value;
  const amountValue = Number(amount.value);
  const detailValue = detail.value;
  const dateValue = getCurrentDate();

  if (!amountValue || !detailValue) return;

  totalExpense += amountValue;
  total.textContent = totalExpense;

  card.innerHTML += `
    <div class="card" data-amount="${amountValue}">
      <div class="card-top">
        <span class="badge">${itemValue}</span>
        <span class="date">${dateValue}</span>
      </div>

      <p class="desc">${detailValue}</p>

      <div class="card-bottom">
        <span class="price">Rs ${amountValue}</span>
        <div class="actions">
          <button onclick="DeleteFinance(this)">Delete</button>
          <button onclick="EditFinance(this)">Edit</button>
        </div>
      </div>
    </div>
  `;

  amount.value = "";
  detail.value = "";
}

function DeleteFinance(btn) {
  const cardItem = btn.closest(".card");
  const price = Number(cardItem.dataset.amount);

  totalExpense -= price;
  total.textContent = totalExpense;

  cardItem.remove();
}

function EditFinance(btn) {
  const cardItem = btn.closest(".card");
  const oldAmount = Number(cardItem.dataset.amount);
  const priceEl = cardItem.querySelector(".price");

  const newAmount = prompt("Edit amount:", oldAmount);

  if (newAmount === null || newAmount === "" || isNaN(newAmount)) return;

  cardItem.dataset.amount = Number(newAmount);
  priceEl.textContent = `₹ ${newAmount}`;

  totalExpense = totalExpense - oldAmount + Number(newAmount);
  total.textContent = totalExpense;
}
