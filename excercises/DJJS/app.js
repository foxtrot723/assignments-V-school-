var myBox = document.getElementById("my-box")



myBox.addEventListener("mouseover", colorBlue)
myBox.addEventListener("mouseout", backToWhite)
myBox.addEventListener("mousedown", colorRed)
myBox.addEventListener("mouseup", colorYellow)
document.addEventListener("wheel", colorOrange)
myBox.addEventListener("dblclick", colorGreen)


function colorBlue() {
    myBox.style.backgroundColor = "blue"
}

function backToWhite() {
    myBox.style.backgroundColor = "white"
}

function colorRed() {
    myBox.style.backgroundColor = "red"
}

function colorOrange() {
    myBox.style.backgroundColor = "orange"
}

function colorYellow() {
    myBox.style.backgroundColor = "yellow"
}

function colorGreen() {
    myBox.style.backgroundColor = "green"
}


// or window.addEventListener

document.addEventListener("keypress", function changeColor(e) {
    if (e.key === "r") {
        myBox.style.backgroundColor = "red"
    } else if (e.key === "o") {
        myBox.style.background = "orange"
    } else if (e.key === "y") {
        myBox.style.backgroundColor = "yellow"
    } else if (e.key === "g"){
        myBox.style.background = "green"
    } else if (e.key === "b") {
        myBox.style.background = "blue"
    } else if (e.key === "p") {
        myBox.style.background = "purple"
    } else {
        return null
    }
})
