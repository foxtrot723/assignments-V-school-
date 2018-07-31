function fizzBuzz() {
    var a = new Array()
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            a.push("fizz-buzz")
        } else if (i % 5 === 0) {
            a.push("buzz")
        } else if (i % 3 === 0){
            a.push("fizz")
        } else {
            a.push(i)
        }
    }
    console.log(a)
}

fizzBuzz()