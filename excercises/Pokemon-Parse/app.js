var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        
        console.dir(data);
        // return data
        parsePokemon(data)
    }
}

function parsePokemon(data) {
    var a = document.body
    for (var i = 0; i < data.objects[0].pokemon.length; i++) {
        var c = document.createElement("p")
        c.innerHTML = data.objects[0].pokemon[i].name
        a.appendChild(c)
    }
}






xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()

