var ask = require("readline-sync")
var num1 = ask.questionInt("What is your favorite number? ")
var num2 = ask.questionInt("What is your second favorite number? ")

var choose = ask.question("Do you want me to add, subtract, multiply, or divide? ")

switch (choose) {
    case "add":
    console.log(num1 + num2);
    break;
    case "subtract":
    console.log(num1 - num2);
    break;
    case "multiply":
    console.log(num1 * num2);
    break;
    case "divide":
    console.log(num1 / num2);
}









