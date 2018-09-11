var numberContainer = document.createElement("h1")
document.body.appendChild(numberContainer)
numberContainer.innerHTML = 0


window.addEventListener("click", function() {
    event.preventDefault()
    var b = numberContainer.innerHTML++
    var a = JSON.stringify(b)
    sessionStorage("clickcount", a)
})








    

