// Write a function that accepts two numbers as parameters, and returns the sum.

// function returnSum(num1, num2) {
//     return num1 + num2
// }

// console.log(returnSum(1, 2))


// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// function returnLargest(num1, num2, num3) {
//     if(num1 > num2 && num1 > num3) {
//         return num1
//     } else if (num2 > num1 && num2 > num3) {
//         return num2
//     } else {
//         return num3
//     }

// }

// console.log(returnLargest(9, 8, 3))



// Function for returning whether or not a number is even or odd

// function evenOrOdd(num) {
//     if(num % 2 === 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }

// OR You can use a ternary statement
    // return (num % 2 === 0 ?  "even" :  "odd")
// }

// console.log(evenOrOdd(333))


// If the string is less than 20 characters, return the string concatenated with itself, if longer cut the string in half


// function acceptString(str) {
//     if (str.length <= 20) {
//         return (str + str)
//     } else {
//         return str.slice(0, str.length / 2)
//     }
// }
// console.log(acceptString("hkshijsfkejflisejljijlaejale"))

var a = 0;
var b = 1;
var c = 1;
var newArr = [];
function fibonacciSequence(n) {
    for (var i = 0; i < n; i++) {
        c = a + b
        a = b
        b = c
        newArr.push(a)
    }
    var reducer = (num1, num2) => num1 + num2
    console.log(newArr.reduce(reducer))
}

fibonacciSequence(5)

