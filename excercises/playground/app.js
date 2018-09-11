
var animalContainer = document.getElementById("animal-info")
var btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.vschool.io/michaelOlson/todo/")
    xhr.onload = function() {
        var ourData = JSON.parse(xhr.responseText)
        renderHTML(ourData)
    }
    xhr.send()
})


function renderHTML(data) {
    var htmlString = ""
    for(var i = 0; i < data.length; i++) {
        
        htmlString += "<p>" + "Today I will " + data[i].title + " " + data[i].description + ".</p>"
    }
    animalContainer.insertAdjacentHTML("beforeend", htmlString)
}






