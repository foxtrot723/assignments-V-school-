
var ask = require("readline-sync")
// var upperCase = require("upper-case")
// var slice = require("node-slice")

// var name = ask.question("What is your name? ")
// console.log(upperCase("Hello " + name + "\n"))
// console.log(name.length + "\n")

// var age = ask.question("How old are you?")
// console.log(name + " is " + age + " years old!")
// console.log(name + " " + age)

// var story = ask.question("Hey " + name + ", can you tell me a story?")
// console.log(story.substring(story.length / 2))
// console.log(story.slice(15, 30))


var num1;
var num2;
var add = function() {
    return Number(num1) + Number(num2)
}
var addQuest = ask.question("What 2 numbers do you want to add?")
console.log(add(addQuest))
