var form = document.travelForm

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var fName = form.fName.value
    var lName = form.lName.value
    var age = form.age.value
    var gender = form.gender.value
    var places = form.places.value
    var checkedBoxes = document.querySelectorAll("input[name=dietary]:checked")
    var dietaryArr = []
    for (var i = 0; i < checkedBoxes.length; i++) {
        dietaryArr.push(checkedBoxes[i].value)
    }
    alert("First Name: " + fName + "\n" + "Last Name: " + lName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Destination: " + places + "\n" + "Dietary Precautions: " + dietaryArr )
})