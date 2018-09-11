var form = document.madLib
form.addEventListener('submit', function(event){
    event.preventDefault()

    var noun = form.noun.value
    var adverb = form.adverb.value
    var verb = form.verb.value
    alert(`the ${noun} did ${adverb} ${verb} in it's home`)
})


var animalForm = document.animals
animalForm.addEventListener('submit', function(e){
    e.preventDefault()

    // console.log(animalForm.favorite.value)
    var animalArr = []
    var checkedBoxes = document.querySelectorAll('input[name=likes]:checked')
    for(var i = 0; i < checkedBoxes.length; i++){
        animalArr.push(checkedBoxes[i].value)
    }
    console.log(animalArr)
})