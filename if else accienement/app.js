// Question NO 1

var speed = 50;

if(speed <= 30){
    console.log("Too slow");
    
} else if(speed > 30 && speed <= 60){
    console.log("Safe speeding");
    
} else if(speed > 60 && speed <= 100){
    console.log("Speeding");
    
} else {
    console.log("Dangerously Fast");
    
}





// Question NO 2

var returnBook = 30

if(returnBook === 0){
    console.log("0$");
} else if(returnBook >= 1 && returnBook <= 5){
    console.log("$1$ per day" , returnBook * 1);
} else if(returnBook >= 6 && returnBook <= 10){
    console.log("$2$ per day" , returnBook * 2);
} else {
    console.log("$5 per day ==> $" , returnBook * 5);
}



// Question NO 3

var ticket = true;
var age = 10;

if(ticket && age >= 18){
    console.log("Welcome to our event");
    
} else {
    console.log("No Entry!");
    
}




// Question NO 4

var battery = 2;

if(battery >= 80 && battery <= 100){
    console.log("Fully charge");
    
} else if(battery >= 50 && battery <= 79){
    console.log("Good Battery");
    
} else if(battery >= 20 && battery <= 49){
    console.log("low battery");
    
} else if(battery <= 20 && battery >= 0){
    console.log("Charge Now!");
    
} else {
    console.log("Invalid");
    
}






// Question NO 5

var customerType = "senior";
var age = 60;

if(customerType === "senior" && age >= 60){
    console.log("30% Discount");
    
} else if(customerType === "student" && age >= 20){
    console.log(" 20% Discount");
    
} else {
    console.log("0% Discount");
    
}






// Question NO 6

var temperature = 11;

if(temperature <= 10){
    console.log("Heavy jacket");
    
} else if(temperature > 10 && temperature <= 20){
    console.log("Sweater");
    
} else if(temperature > 20 && temperature <= 30){
    console.log("T-shirt");
    
} else {
    console.log("Light Clothes");
    
}







// Question N0 7

 var level = -2765;

 if (level == 2) {
    console.log("sedentary");
 }
else if (level == 2.5) {
    console.log("Moderate");
}
else if (level >= 3) {
    console.log("Acive");
}
else{
    console.log("Kia chah raha hai bhai");
}





// Question NO 8

var urdu = 60;
var math = 60;
var science = 6;

if (urdu >= 40 && math >= 40 && science >= 40) {
  console.log("You are pass");
} else {
  console.log("you are fail");
}





// Question NO 9

  var time = 45;
  if (time >= 6 && time <= 17) {
    console.log("Light Mode")
  }
  else {
    console.log("Dark Mode")
  }







  // Question NO 10

  var time = 10

  if (time >= 6 && time <= 10) {
    console.log("Breakfast")
  }
else if (time >=12 && time <= 14) {
  console.log("Lunch")
}
else if (time >= 18 && time <= 21){
  console .log("Dinner")
}
else{
  console.log("It is snack time")
}