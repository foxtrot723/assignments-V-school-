var form = document.airlineform;

form.addEventListener("submit", function(event) {
    event.preventDefault();
        var firstName = form.firstname.value;
        var lastName = form.lastname.value;
        var age = form.age.value;
        var gender = form.gender.value;
        var location = form.places.value;
        var dietary = [];
        var checkboxes = document.querySelectorAll("input[name=diet]:checked");
    
        for (var i = 0; i < checkboxes.length; i++) {
            dietary.push(checkboxes[i].value)
        }
    
    
        alert("First Name: " + firstName + "\n" + "Last Name: " + lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Travel Location: " + location + "\n" + "Diet: " + dietary + "\n" + "Awesome, now if you die, it won't be an accident..");
});






