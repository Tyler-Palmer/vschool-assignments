// DOM -> DOCUMENT OBJECT MODEL
// console.dir(document)

// // Window ->
// console.dir(window)

// Grab that input
// var candyInput = document.getElementById('candyInput')
    // .value => see what the user typed

// // Grab the candyList 'ul'
// var candyList = document.getElementById('candyList')

// // Create the new HTML element 
// var newCandyItem = document.createElement('li')

// // Add Text to an element
//     // .textContent  &  .innerHTML
// newCandyItem.textContent = "Oreos"

// // Tell list to add a new child 'newCandyItem'
// candyList.appendChild(newCandyItem)
// // candyList.innerHTML = 'as<h1> Hello World </h1>'



// OTHER DOM SELECTORS
    // getElementById(id)
    // getElementsByClassName(className)
    // getElementsByTagName('div')


// First way of writing event listener
// document.getElementById('addCandy').addEventListener('click', function (){
//     var input = document.getElementById('candyInput').value
//     document.getElementById('candyList').innerHTML += `<li>${input}</li>`
// })

// Second way of writing event listener
// document.getElementById('addCandy').click(function (){
//     var input = document.getElementById('candyInput').value
//     document.getElementById('candyList').innerHTML += `<li>${input}</li>`
// })

// window.addEventListener('scroll', function () {
//     document.getElementById('box').style.backgroundColor = 'red'
// })
