// Simple Array

var data = [10 , 20 , 30 , 40 , 50];
var sum = 0;
document.write ("<ul>")
for (i = 0; i < data.length; i++){
    document.write ("<li>" + data[i] + "</li>");  
    sum = sum + data[i];
}
document.write ("</ul>")
document.write("Total sum" + sum)


// 1
let numbers = [10, 25, 40, 55, 70];
const numjion = numbers.join(" and ")
console.log(numjion);




// 2
let cities = ["Quetta" , "Karachi" , "Islamabad" , "Peshawar"]
const joinedcities = cities.join("|");
console.log(joinedcities);




// 3
let tasks = [
  "Wake up early",
  "Study JavaScript",
  "Exercise",
  "Read a book",
  "Practice coding"
];
const updatedArr = tasks.pop()
console.log(tasks)




// 4
let queueNumbers = [101, 102, 103, 104, 105];
const removefirst = queueNumbers.shift()
console.log(queueNumbers)




// 5
let studentNames = ["Ahmed" , "Sohail" , "Amir" , "Adil"];
let newStudent = studentNames.unshift("Noaman")
console.log(studentNames);




// 6
let shoppingCart = ["Apple", "Banana", "Milk", "Bread", "Eggs"];
shoppingCart.push("mobile");
console.log(shoppingCart)



// 7
let passengers = ["Ali", "Sara", "Ahmed", "Ayesha", "Bilal"];
passengers.shift();
console.log(passengers);



// 8
let letters = ["A", "B", "C", "D", "E"];
console.log(letters.join(""));




// 9
let playlist = ["Song A", "Song B", "Song C", "Song D"];
playlist.unshift("new song");
console.log(playlist);



// 10
let notifications = [
  "You have a new message",
  "Your order has been shipped",
  "Friend request received",
  "Password changed successfully"
];
notifications.shift()
console.log(notifications)







// 
// 
// 
// ou have an array of numbers.
// Convert the entire array into one single string separated by commas.

// You have an array of city names.
// Create a single sentence from the array where each city is separated by " | ".

// You have an array of tasks.
// Remove the last task and display the updated array.

// You have an array of queue numbers.
// Remove the first number because it has been processed.

// You have an array of student names.
// Add a new student at the beginning of the list.

// ⚙️ SET 2: Real-World / Logic Questions (5)

// You have a shopping cart array.
// A user adds a new item at the end of the cart.

// A bus stop has a list of passengers.
// The first passenger leaves the bus.

// You have an array of letters.
// Convert it into a word without spaces.

// You are managing a playlist.
// A new song should be added to the start of the playlist.

// You have an array of notifications.
// Remove the most recent notification.
// 