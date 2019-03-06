// nameForm.addEventListener('submit', function(event){
//     e.preventDefault()
//     var firstName = nameForm.firstName.value
//     var lastName = nameForm.lastName.value

//     alert(`First Name: ${firstName}, Last Name: ${lastName}`)
// })



// document.madLib.addEventListener('submit', function(event){
//     event.preventDefault()

//     var noun = document.madLib.noun.value
//     var verb = document.madLib.verb.value
//     var adverb = document.madLib.adverb.value
    
//     alert(`The ${noun}  did ${verb} ${adverb}  in it's home`)
// })

// var addForm = document.getElementById('')
// //var addResult = document.addResult.innerHTML

// var subtForm = document.subtForm
// var multForm = document.multForm

// addForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     var a = addForm.addA.value;
//     var b = addForm.addB.value;
//     console.log(a+b)
//     var resultAdd = function(){
//         return a + b
//     }
// })

var addForm = document.getElementById('addForm')
addForm.addEventListener('submit', function(event){
    event.preventDefault();
    var a = Number(addForm.addA.value)
    var b = Number(addForm.addB.value)
    var added = a+b
    console.log(added)
    document.getElementById('addResult').innerHTML = added
})

var subtForm = document.getElementById('subtForm')
subtForm.addEventListener('submit', function(event){
    event.preventDefault();
    var a = Number(subtForm.subtA.value)
    var b = Number(subtForm.subtB.value)
    var subt = a-b
    console.log(subt)
    document.getElementById('subtResult').innerHTML = subt
})

var multForm = document.getElementById('multForm')
multForm.addEventListener('submit', function(event){
    event.preventDefault();
    var a = Number(multForm.multA.value)
    var b = Number(multForm.multB.value)
    var mult = a*b
    console.log(mult)
    document.getElementById('multResult').innerHTML = mult
})