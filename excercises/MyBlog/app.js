var button = document.querySelectorAll("li")


function getNames() {
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("mouseover", function() {
            document.getElementById("psyche-mike").style.color = "";
        })
        button[i].addEventListener("mouseout", function() {
            document.getElementById("background-image").style.color = "white";
            
        })
    }
}

getNames()
// var myTitle = document.getElementById("psyche-mike")
// var navButt = document.getElementsByTagName("li")
// console.log(navButt)
// var colorArr = ["red", "orange", "yellow", "green", "blue"]



// navButt.addEventListener("mouseover", cycleColors)

// function cycleColors() {
//     myTitle.style.backgroundColor = "red"
// }
// function colorRed() {

// }

// function colorOrange() {

// }

// function colorYellow() {

// }

// function() colorGreen


// function changeTitle(title) {
//     for (var i = 0; i < linx.length; i++) {
        
//         }
//         navButt[i].addEventListener("mouseover", function() {
//             title.style.color = colorArr[i]
//     }
// }

// console.log(linx.length)