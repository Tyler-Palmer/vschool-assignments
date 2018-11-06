
// document.storage.addEventListener('click', function(e){
//     e.preventDefault()
//     //add click count
//     //update click counter display
// })

// function updateClicks(){
//     localStorage.setItem
// }

// function addClick(){
//     var clickRegister = document.addEventListener('click',)
// }

////

var clickCount = 0;

document.getElementById("clickCount").textContent = clickCount;

window.addEventListener("click", function(){
    clickCount++
    localStorage.setItem("clickCount", clickCount)
    document.getElementById("clickCount").textContent = clickCount
})