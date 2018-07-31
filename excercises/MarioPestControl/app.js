var form = document.marioForm
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var input1 = form.input1.value
    var input2 = form.input2.value
    var input3 = form.input3.value
    var sum1 = input1 * 5
    var sum2 = input2 * 7
    var sum3 = input3 * 11
    var sum = sum1 + sum2 + sum3
    document.getElementById("return-sum").innerHTML = sum
    console.log(input1)
    if (sum >= 100) {
        document.getElementById("return-sum").style.fontSize = "1.8vh";
        document.getElementById("return-sum").style.marginTop = "1vh";

    }
});

var colorArr = ["rgb(248, 0, 3)", "rgb(255, 108, 4)", "rgb(255, 255, 4)", "rgb(16, 168, 24)", "rgb(30, 85, 253)", "rgb(238, 59, 253)"]
var currentColor = 0
var letters = document.querySelectorAll("#title p")
function changeColors() {
    --currentColor    
    if (currentColor < 0) {
        currentColor = colorArr.length -1
    } 
    for (var i = 0; i < letters.length; i++) {
        letters[i].style.color = colorArr[(currentColor + i) % colorArr.length]
    }      
}

window.setInterval(changeColors, 1000)
changeColors()
console.log(letters)