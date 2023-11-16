/**
* Filename: complex_code.js
* Description: Demonstrating a complex JavaScript code example with over 200 lines
* Author: [Your Name]
* Date: [Today's Date]
*/

// Global Variables
let userInput = "";
let result = 0;

// Helper Functions

// Function to add two numbers
function add(a, b) {
   return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
   return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
   return a * b;
}

// Function to divide two numbers
function divide(a, b) {
   if (b === 0) {
      throw new Error("Cannot divide by zero");
   }
   return a / b;
}

// Function to calculate the factorial of a number
function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   }
   return n * factorial(n - 1);
}

// Function to perform a complex computation
function complexComputation() {
   let total = 0;

   for (let i = 0; i < 100; i++) {
      total += i;
   }

   for (let i = 0; i < 50; i++) {
      total -= i;
   }

   for (let i = 0; i < 10; i++) {
      total *= i;
   }

   for (let i = 0; i < 5; i++) {
      total /= i;
   }

   return total;
}

// Main Program
console.log("Welcome to a Complex JavaScript Code Example!");

while (userInput !== "exit") {
   userInput = prompt("Enter a command (add/subtract/multiply/divide/factorial/complex/exit):");

   switch (userInput) {
      case "add":
         const num1 = Number(prompt("Enter the first number:"));
         const num2 = Number(prompt("Enter the second number:"));
         result = add(num1, num2);
         console.log(`Result: ${result}`);
         break;
      case "subtract":
         const num3 = Number(prompt("Enter the first number:"));
         const num4 = Number(prompt("Enter the second number:"));
         result = subtract(num3, num4);
         console.log(`Result: ${result}`);
         break;
      case "multiply":
         const num5 = Number(prompt("Enter the first number:"));
         const num6 = Number(prompt("Enter the second number:"));
         result = multiply(num5, num6);
         console.log(`Result: ${result}`);
         break;
      case "divide":
         const num7 = Number(prompt("Enter the first number:"));
         const num8 = Number(prompt("Enter the second number:"));
         result = divide(num7, num8);
         console.log(`Result: ${result}`);
         break;
      case "factorial":
         const num9 = Number(prompt("Enter the number:"));
         result = factorial(num9);
         console.log(`Result: ${result}`);
         break;
      case "complex":
         result = complexComputation();
         console.log(`Result: ${result}`);
         break;
      case "exit":
         console.log("Exiting program...");
         break;
      default:
         console.log("Invalid command! Please try again.");
   }
}