// getElementsByTagName('ul')
// getElementByClassName()


// var myUl = document.getElementById('my-list')

// Need to create the new element
// var myLi = document.createElement('li')
// myLi.textContent = 'this is from app.js'

// var mySecondLi = document.createElement('li')
// mySecondLi.textContent = 'this is the second one from app.js'

// Append that element to the ul
// myUl.appendChild(myLi)
// myUl.appendChild(mySecondLi);

// console.log(myUl)
var submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', addUserInput)


function addUserInput(){
    var userInput = document.getElementById('user-input')

    // Get user input
    var userText = userInput.value

    // Create an element
    var newListItem = document.createElement('li')

    // Add the user text to that element
    newListItem.textContent = userText

    // append that element to the DOM
    var myUl = document.getElementById('my-list')
    myUl.appendChild(newListItem);

    userInput.value = ''
}


