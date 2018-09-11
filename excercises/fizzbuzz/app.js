function fizzBuzz() {
    var a = []
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            continue
        } else if (i % 5 === 0) {
            a.push(i)
        } else if (i % 3 === 0){
            a.push(i)
        } 
    }
    return a
}

fizzBuzz()