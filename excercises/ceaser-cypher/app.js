// Understand the question
// Break it down
// pseudo-Code
// pick one part from the brak-down
// follow-through(code)
// we go back to step one
// look back for other possible solutions

var ask = require("readline-sync")
var phrase = ask.question("Enter a phrase you would like me to encrypt: ")
var shift = ask.questionInt("How many numbers would you like me to shift?")

function ceasarCypher(str, shift) {
    var encrypted = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < str.length; i++) {
        if(alphabet.indexOf(str[i]) !== -1) {
        var currentIndex = alphabet.indexOf(str[i])
        encrypted += alphabet[(currentIndex + shift) % 26]
    } else {
        encrypted += str[i]
    }
}
return encrypted
}

console.log(ceasarCypher(phrase, shift))

