var phrase = "slimy smelly solution";
// var returnFrequency = require("readline-sync")
var newArr = []
function myFunction() {
    for (var i = 0; i < phrase.length; i++) {
        newArr.push(phrase[i])
    }
    console.log(newArr.push(phrase))
}

console.log(myFunction())

// function solution(str) {
//     var obj = {}
//     for(var i = 0; i < str.length; i++) {
//         var transfer = str[i]
//         if (obj[transfer]) {
//             obj[transfer]++
//         } else {
//             obj[transfer] = 1
//         }
//     }
//     return obj
// }

// console.log(solution("slimy smelly solution"))

