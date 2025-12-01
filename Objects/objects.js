// Problem NO 1
// Print only the names of all students.

const ol = document.querySelector("#ol");
const students = [
{ name: "Aman", age: 20 },
{ name: "Sara", age: 22 },
{ name: "Ravi", age: 19 },
{ name: "Nisha", age: 21 },
{ name: "Kunal", age: 23 },
{ name: "Meera", age: 20 },
{ name: "Sahil", age: 18 },
{ name: "Tina", age: 22 },
{ name: "Arjun", age: 19 },
{ name: "Kavya", age: 21 }
];

for (let i = 0;i < students.length; i++){
    console.log(students[i].name);
    ol.innerHTML += ` <li> Name ${students[i].name} </li>`
};




// Problem N0 2
// Calculate the total price of all products.

const list = document.querySelector("#list");
const products = [
{ title: "Laptop", price: 45000 },
{ title: "Mouse", price: 800 },
{ title: "Keyboard", price: 1200 },
{ title: "Monitor", price: 9000 },
{ title: "USB Cable", price: 300 },
{ title: "Headphones", price: 1500 },
{ title: "Charger", price: 700 },
{ title: "Webcam", price: 2500 },
{ title: "Mic", price: 2800 },
{ title: "Speaker", price: 3200 }
];

var totalPrice = 0
for (let i = 0; i < products.length; i++){
    console.log(products[i]);
    totalPrice += products[i].price
    list.innerHTML = ` The total price of all the products is = ${totalPrice} `
};
console.log("The total price of all the products is =>",totalPrice);



// Problem N0 3
// Print names of employees whose salary is above 50,000.

const item = document.querySelector("#item");
const employees = [
{ name: "John", salary: 55000 },
{ name: "Maya", salary: 48000 },
{ name: "Karan", salary: 65000 },
{ name: "Reena", salary: 70000 },
{ name: "Dev", salary: 52000 },
{ name: "Hina", salary: 45000 },
{ name: "Vishal", salary: 75000 },
{ name: "Rita", salary: 35000 },
{ name: "Amit", salary: 90000 },
{ name: "Sunil", salary: 60000 }
];
 
 for (let i = 0; i < employees.length; i++){
    if (employees[i].salary >= 50000){
        console.log(employees[i])
        item.innerHTML += ` <li>  ${employees[i].name} - ${employees[i].salary} </li>`
    };
    
 };