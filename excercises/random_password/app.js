function passwordGenerator(num) {
    var pattern = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz,.;:/?']["
    var str = ""
    for(var i = 0; i < num; i++) {
        str += pattern.charAt(Math.random() * pattern.length)
    }
    return str

}

console.log(passwordGenerator(6))

function passwordGen(length) {
    var t = []
    for (var i = 0; i < length; i++) {
        t.push(Math.floor(Math.random() * (122-33) + 33))
    }
    return String.fromCharCode(...t)
}

console.log(passwordGen(7))