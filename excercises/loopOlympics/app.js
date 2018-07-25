// for (var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// for (var i = 9; i >= 0; i--) {
//     console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"];

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// Pushes numbers 0-9 into an array

// var arr = [];
// for (var i = 0; i <= 9; i++) {
//     arr.push(i)
// }
// console.log(arr)


// Return even numbers 0-100 to the console

// for (var i = 0; i <= 100; i+= 2) {
//         console.log(i)
// }

// This for loop takes every other string in the array and pushes them into a new array

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var arr = [];
// for (var i = 0; i < fruit.length; i += 2) {
//     arr.push(fruit[i])
// }
// console.log(arr)

// var peopleArray = [  
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   Returns the names from the array of objects

// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
// }


// Returns the names in an array and the occupations in a seperate array

// var arr = [];
// var arr2 = [];

// for (var i = 0; i < peopleArray.length; i++) {
//     arr.push(peopleArray[i].name)
//     arr2.push(peopleArray[i].occupation)
// }
// console.log(arr)
// console.log(arr2)


// This for loop pushes every other name into an Array, then every other occupation into an array starting from the next one

// var arr = [];
// var arr1 = [];

// for (var i = 0; i < peopleArray.length; i += 2) {
//     arr.push(peopleArray[i].name)
//     arr1.push(peopleArray[i + 1].occupation)
// }

// console.log(arr)
// console.log(arr1)



// var arr = []
// var newArr = []

// for (var j = 0; j < 3; j++) {
//     newArr.push(0)
//     arr.push(newArr)
// }
// console.log(arr)



// var arr = []
// var newArr = []

// for (var i = 0; i < 3; i++) {
//     arr.push(newArr)
//     newArr.push(i)
// }
// console.log(arr)



// var x = "x"
// for(var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//         newArr.shift(i)
//         newArr.push(x)
//     }
// }
// console.log(arr)
