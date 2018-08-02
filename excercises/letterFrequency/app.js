var phrase = "slimy smelly solution".split("");
// var returnFrequency = require("readline-sync")
var obj = {}
function myFunction() {
    for (var i = 0; i < phrase.length; i++) {
        console.log(obj(phrase[i]))        
    }

}

myFunction()

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

