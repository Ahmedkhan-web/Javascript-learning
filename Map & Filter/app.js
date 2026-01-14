// -----Map------- 



// 1
var num = [1 , 2 , 3 , 4 , 5];
var dubbled = num.map((val) =>{
    return val * 2
});
console.log(dubbled);




// 2
var fruits = ["apple", "banana" , "cherry"];
var upper = fruits.map(fruit => fruit.toUpperCase());
console.log(upper);




// 3
var data = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
var names = data.map(onlyName => onlyName.name);
console.log(names);


// 4
var animal = ["dog", "elephant" , "tiger"];
var nameLength = animal.map(length => length.length);
console.log(nameLength);




// 5
var dates =  [
  new Date("2024-01-01"),
  new Date("2024-06-15"),
  new Date("2024-12-25")
];
var readAbleFormate = dates.map(form => form.toDateString());
console.log(readAbleFormate);




// -------Filter------



// 1
var numb = [1, 2, 3, 4, 5, 6];
var evenNumb = numb.filter(even => even % 2 === 0);
console.log(evenNumb);



// 2
var users = [
  { name: "Alice", active: false },
  { name: "Bob", active: true }
];
var activeUsers = users.filter(user => user.active);
console.log(activeUsers);




// 3
var words = ["apple", "banana", "avocado", "cherry", "apricot"];
var aWords = words.filter(word => word[0].toLowerCase() === "a");
console.log(aWords);



// 4
var mixedArray = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];
var truthyArray = mixedArray.filter(Boolean);
console.log(truthyArray);



// 5
var data = [1, null, 2, undefined, 3, 0, "", 4];
var filteredData = data.filter(item => item !== null && item !== undefined);
console.log(filteredData);