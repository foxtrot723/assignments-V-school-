// function noDuplicates(str) {
//     let noDupes = ""
//     let extras = ""
//         for (var i = 0; i < str.length; i ++) {
//             (noDupes.includes(str[i])) ? extras = extras.concat(str[i])
//             : noDupes = noDupes.concat(str[i])
//         }
//         return noDupes
// }
// console.log(noDuplicates("bookkeeper larry"))

// .indexOf()

function noDuplicates(str) {
    // Declare an empty variable
    let noDupes = ""
    // Loop through the string to check each letter
    for (var i = 0; i < str.length; i ++) {
        // If the noDupes string doesnt have the current letter
        if (noDupes.indexOf(str[i]) === -1) {
            // add it to the noDupes string
            noDupes += str[i]
        } 
    }
    return noDupes
}

console.log(noDuplicates("bookkeeper larry"))
