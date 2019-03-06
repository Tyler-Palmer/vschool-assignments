// FORMS
var nameForm = document.myForm

nameForm.addEventListener('submit', function(event){
    e.preventDefault()
    var firstName = nameForm.firstName.value
    var lastName = nameForm.lastName.value

    alert(`First Name: ${firstName}, Last Name: ${lastName}`)
})



document.madLib.addEventListener('submit', function(event){
    event.preventDefault()

    var noun = document.madLib.noun.value
    var verb = document.madLib.verb.value
    var adverb = document.madLib.adverb.value
    
    alert(`The ${noun}  did ${verb} ${adverb}  in it's home`)
})
