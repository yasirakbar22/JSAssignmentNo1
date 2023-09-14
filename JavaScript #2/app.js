// (Chapter 9 /to 11)


// (Q1)

// const city_name = prompt("Enter the city name:").toLowerCase();

// if (city_name === "karachi") {
//     console.log("Welcome to the city of lights");
// } else {
//     console.log("Welcome to " + city_name);
// }

// (Q2)

// const gender = prompt("Enter your gender (male or female):").toLowerCase();

// if (gender === "male") {
//     console.log("Good Morning Sir.");
// } else if (gender === "female") {
//     console.log("Good Morning Ma'am.");
// } else {
//     console.log("Good Morning!");
// }

// (Q3)

// const signal_color = prompt("Enter the color of the traffic signal:").toLowerCase();

// switch (signal_color) {
//     case "red":
//         console.log("Stop! The signal is red.");
//         break;
//     case "yellow":
//         console.log("Prepare to stop. The signal is about to change.");
//         break;
//     case "green":
//         console.log("You can go. The signal is green.");
//         break;
//     default:
//         console.log("Invalid signal color. Please enter red, yellow, or green.");
//         break;
// }

// (Q4)

// const remainingFuel = parseFloat(prompt("Enter the remaining fuel in liters:"));

// if (remainingFuel < 0.25) {
//     console.log("Please refill the fuel in your car");
// } else {
//     console.log("You have enough fuel.");
// }

// (Q5)

// a.
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// b.
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// } 

// c.
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// } 

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// e.
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// } 

// f.
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// (Q6)

// const subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
// const subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
// const subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
// const totalMarks = parseFloat(prompt("Enter total marks:"));

// const obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// const percentage = (obtainedMarks / totalMarks) * 100;

// let grade;
// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// console.log("Percentage: " + percentage.toFixed(2) + "%");
// console.log("Grade: " + grade);


// (Q7)

// const secretNumber = Math.floor(Math.random() * 10) + 1;

// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//   console.log("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//   console.log("Close enough to the correct answer");
// } else {
//   console.log("Sorry, try again. The correct answer was " + secretNumber);
// }


// (Q8)

// const number = parseInt(prompt("Enter a number:"));

// if (number % 3 === 0) {
//   console.log(number + " is divisible by 3.");
// } else {
//   console.log(number + " is not divisible by 3.");
// }

// (Q9)

// const number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//   console.log(number + " is an even number.");
// } else {
//   console.log(number + " is an odd number.");
// }

// (Q10)

// const temperature = parseInt(prompt("Enter the temperature in Celsius:"));

// if (temperature > 40) {
//   console.log("It is too hot outside.");
// } else if (temperature > 30) {
//   console.log("The Weather today is Normal.");
// } else if (temperature > 20) {
//   console.log("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   console.log("OMG! Today’s weather is so Cool.");
// } else {
//   console.log("It is extremely cold outside.");
// }

// (Q11)

// const firstNumber = parseFloat(prompt("Enter the first number:"));

// const secondNumber = parseFloat(prompt("Enter the second number:"));

// const operation = prompt("Enter the operation (+, -, *, /, or %):");

// let result;

// if (operation === "+") {
//   result = firstNumber + secondNumber;
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
// } else if (operation === "/") {
//   if (secondNumber === 0) {
//     console.log("Error: Division by zero");
//   } else {
//     result = firstNumber / secondNumber;
//   }
// } else if (operation === "%") {
//   if (secondNumber === 0) {
//     console.log("Error: Modulus by zero");
//   } else {
//     result = firstNumber % secondNumber;
//   }
// } else {
//   console.log("Invalid operation. Please enter +, -, *, /, or %.");
// }
// if (result !== undefined) {
//   console.log("Result: " + result);
// }


// (Chapter 12 /to 13 )

// (Q1)
// const inputChar = prompt("Enter a character:");

// const charCode = inputChar.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//   console.log(inputChar + " is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//   console.log(inputChar + " is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//   console.log(inputChar + " is a lowercase letter.");
// } else {
//   console.log(inputChar + " is not a number, uppercase letter, or lowercase letter.");
// }

// (Q2)
// const num1 = parseInt(prompt("Enter the first integer:"));

// const num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//   console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//   console.log(num2 + " is larger than " + num1);
// } else {
//   console.log("Both integers are equal: " + num1);
// }

// (Q3)
// const number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
//   console.log(number + " is positive.");
// } else if (number < 0) {
//   console.log(number + " is negative.");
// } else {
//   console.log("The number is zero.");
// }

// (Q4)
// const character = prompt("Enter a character (a single letter):");

// const isVowel = /[aeiouAEIOU]/.test(character);

// console.log(isVowel);

// (Q5)
// const correctPassword = "mySecretPassword";

// const userPassword = prompt("Enter your password:");

// if (userPassword === null || userPassword === "") {
//   console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password.");
// } else {
//   console.log("Incorrect password.");
// }

// (Q6)
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting);


// (Q7)
// const time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

// let greeting;

// if (time >= 0 && time < 1200) {
//   greeting = "Good morning!";
// } else if (time >= 1200 && time < 1700) {
//   greeting = "Good afternoon!";
// } else if (time >= 1700 && time < 2000) {
//   greeting = "Good evening!";
// } else if (time >= 2000 && time <= 2359) {
//   greeting = "Good night!";
// } else {
//   greeting = "Invalid input. Please enter a valid 24-hour clock time.";
// }
// console.log(greeting);










