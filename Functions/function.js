// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.
function sum(num1, num2){
    console.log(num1 + num2);
};
sum(15, 20);


// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.
function subtract(num1, num2){
    return num1 - num2;
};
console.log(subtract(20, 8));



// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.

function multiplies(num1, num2){
    return num1 * num2;
};
console.log(multiplies(7,7));


// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.
function divide(num1, num2){
    return num1 / num2;
};
console.log(divide(49, 7));



// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.
function getRemainder(num1, num2){
    return num1 % num2;
};
console.log(getRemainder(20, 3));



// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".
function isPositive(num){
    if(num > 0){
        console.log("Positive")
    } else{
        console.log("Not Positive")
    }
}
isPositive(4);



// 7. isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".
function isNegative(num){
    if(num < 0){
        console.log("Nagative");
    } else{
        console.log("Not Nagative");
    };
};
isNegative(5);



// 8. checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".
function checkEven(num){
    if(num % 2 === 0){
        console.log("Even");
    } else{
        console.log("Odd");
    };
};
checkEven(7);




// 9. isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".
function isEqual(num1, num2){
    if(num1 === num2){
        console.log(num1, "is equal to" , num2)
    } else{
        console.log(num1, "is not equal to" , num2)
    }
}
isEqual(7, 6);




// 10. compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".
function compareNumbers(num1, num2){
    if(num1 > num2){
        console.log(num1, "is greater than", num2)
    } else{
        console.log(num1, "is smaller than", num2)
    }
}
compareNumbers(5, 4);





// 11. getFullName
// Write a function that takes a first name and last name, and returns the full name.
const firstName = prompt("Enter your first name")
const lastName = prompt("Enter your last name")
function getFullName(){
    return firstName + " " + lastName;
}
console.log(getFullName());




// 12. getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40
function getGrade(grade){
    if(grade >= 40){
        console.log("Pass")
    } else{
        console.log("Fail")
    }
}
getGrade(44);



// 13. isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".
function isPasswordValid(password){
    if (password.length >= 8){
        console.log("Valid")
    } else{
        console.log("Too short")
    }
}
isPasswordValid("fgdfgf");



// 14. calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted
// price.
function calculateDiscountedPrice(price , discount){
    console.log("Price after" , discount , "% discount is" , price - (price * discount / 100))
}
(calculateDiscountedPrice(200 , 29))