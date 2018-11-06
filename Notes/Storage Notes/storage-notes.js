
localStorage.setItem('name', 'jack')
var name = localStorage.getItem('name')
document.getElementById('local').innerHTML = `<h1>Local: ${name}</h1>`