// var ask = require("readline-sync")
// var name = ask.question("What is your name? ")
// var wannaPlay = ask.keyInYN("Ok " + name + ", would you like to play a game?")
// var startGame = ''
// var isAlive = true
// var findKey = ''

// if (wannaPlay) {
//     while(isAlive) {
//         var generalChoices = ["find the key", "put hand in the moist hole", "open the door"]
//         startGame = ask.keyInSelect(generalChoices, "I will give you 3 options, choose wisely")
//         if (generalChoices[startGame] === "find the key") {
//             var keyChoices = ["put hand in a hole", "unlock the door"]
//             findKey = ask.keyInSelect(keyChoices, "You have found the key under the rug, what will you do next " + name + "?")
//             if (keyChoices[findKey] === "put hand in a hole") {
//                 console.log("I am sorry, I will eat your soul now...")
//                 isAlive = false
//             } else {
//                 console.log("You have successfully completed the game, but I will still eat your soul...")
//                 isAlive = false
//             }
//         } else if (generalChoices[startGame] === "put hand in the moist hole") {
//             console.log("I will be eating your soul now...")
//             isAlive = false
//         } else {
//             console.log("You have to find the key before you can exit")
//         }
//     }

// } else {
//     console.log("Ok, you are really missing out. Maybe next time.")
//     isAlive = false
// }



var ask = require("readline-sync")
var wannaPlay = ask.keyInYN("Do you want to play a game?")









if (wannaPlay) {
    
} else {

}