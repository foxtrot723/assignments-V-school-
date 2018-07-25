function myStruncFunc1(str1, str2) {
    return str1.slice(0, 6).concat(str2).toUpperCase()
}

function myStruncFunc2(str1, str2) {
    return str2.split(" ").indexOf("old") + str1.toLowerCase().lastIndexOf("l")
}

function myStruncFunc3(str1, str2) {
    return str1.substr(1).repeat(2).replace(" darkness", ",")
}

console.log(myStruncFunc1("hello darkness", "my old friend"))
console.log(myStruncFunc2("hello darkness", "my old friend"))
console.log(myStruncFunc3("hello darkness", "my old friend"))