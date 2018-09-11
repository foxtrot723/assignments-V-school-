

///////////////// CREATE THE AXIOS OBJECT AND USE IT TO GET JSON OBJECTS FROM POSTMAN ////////////////


axios.get('https://api.vschool.io/michaelOlson/todo/').then(function(response){
    displayData(response.data);
    bindDeleteTodo();
}).catch(function(err){
    console.log(err)
})

function displayData(data){
    var display = document.getElementById('items');
    var parent, button, div, todo, checkbox;
    

    for(var i = 0; i < data.length; i++){
        parent = document.createElement('div');
        todo = data[i];
        button = document.createElement("button");
        button.setAttribute('data-id', todo._id)
        button.className = 'delete-button';
        button.innerHTML = 'delete';

        ////////// CREATING THE INDIVIDUAL TODOS DOCUMENT ELEMENTS /////////////

        var div = document.createElement('div')
        div.setAttribute("id", "slash-through-title" + i)
        div.textContent = data[i].title
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].price
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].description
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].completed
        parent.appendChild(div)
        var div = document.createElement('div')
        div.textContent = data[i].imgUrl
        parent.appendChild(div)
        checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('id', "checks")
        checkbox.setAttribute('onchange', function() {
            
                if(document.getElementById("slash-through-title" + i).checked) {
                    document.getElementById("slash-through-title" + i).style.textDecoration = "line-through";
                } 
        })
        parent.setAttribute('class', 'todoItem')
        parent.appendChild(checkbox)
        parent.appendChild(button)
        display.appendChild(parent)
    }
}

        //////////////// CREATE THE FORM IN JAVASCRIPT ////////////////


var form = document.formTodo


form.addEventListener("submit", function(e){
    e.preventDefault()
    
    var title = form.title.value
    var price = form.price.value
    var description = form.description.value
    var url = ''
    var completed = ''

    var newTodo = {  
        title: title, // this one is the only thing that is actually required
        description: description,
        price: price, // Must be a number of some kind (integer or float)
        imgUrl: url,
        completed: completed // must be a boolean (true or false). If nothing provided, defaults to false.
    };

    axios.post('https://api.vschool.io/michaelOlson/todo', newTodo).then(function(response){  
        displayData(response.data);
    }).catch(function(error){
        console.log(error)
    });
})










    function deleteTodo(todoId) {
        return axios.delete("https://api.vschool.io/michaelOlson/todo/" + todoId );
    };



    function bindDeleteTodo() {
        var parent = document.getElementById('items');

        parent.addEventListener('click', function filterButton(e) {
            var elm = e.target;
            var todoId;
            
            if (elm.className == 'delete-button') {
                todoId = elm.getAttribute('data-id');
                
                // delete the todo and then remove todo from the DOM
                deleteTodo(todoId)
                .then(function() {
                    elm.parentNode.parentNode.removeChild(elm.parentNode);
                })
                .catch(function(e) {
                    alert('There was an error deleting your todo');
                });
                
            }
        })
    }




