// localStorage.setItem('name', 'jack')
// var name = localStorage.getItem('name')
// document.getElementById('local').innerHTML = `<h1>Local: ${name}</h1>`

// sessionStorage.setItem('name', 'andrew')
// var sName = sessionStorage.getItem('name')
// document.getElementById('session').innerHTML = `<h1>Session: ${sName}</h1>`

var users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
updateList()

document.storage.addEventListener('submit', function(e){
    e.preventDefault()
    addUser()
    updateList()
})

function updateList (){
    localStorage.setItem('users', JSON.stringify(users))
    var people = JSON.parse(localStorage.getItem('users')) || []
    document.getElementById('userList').innerHTML = ''
    for (var i = 0; i < people.length; i++){
        console.log(people[i])
        document.getElementById('userList').innerHTML += `<li>username: ${people[i].name} age: ${people[i].age}</li>`
    }
}

function addUser (){
    var newUser = {
        name: document.storage.username.value,
        age: document.storage.age.value
    }
    document.storage.username.value = ''
    document.storage.age.value = ''
    users.push(newUser)
}