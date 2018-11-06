// The user can see their current list of todos.
// Todos show up as soon as the page loads.


// Step1:  Get initial Todos
function getData(){
    axios.get('https://api.vschool.io/bob/todo').then(function(response){
        listTodos(response.data)
    })
}

function listTodos(arr){
    for(var i = 0; i < arr.length; i++){

        // Create container for specific Todo
        var todoContainer = document.createElement('div')
            // Add a class to that container (if you want)
        todoContainer.classList.add('todo')

        // Create an html element
        var title = document.createElement('h3')

        // Put the Todo title inside of that element
        title.textContent = arr[i].title
    
        // Put element on the DOM
        todoContainer.appendChild(title)

        document.getElementById('list-container').appendChild(todoContainer)
    }
}




// Step 2: Post a new Todo
var todoForm = document.addTodoForm
todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    // When the user submits
        // Grab the user input
    var title = todoForm.title.value
        // Put that input in a new object
    var newTodo = {}
    newTodo.title = title
        // Send a Post request
    axios.post('https://api.vschool.io/bob/todo', newTodo).then(function(response){
        console.log(response.data) // should be new todo with an _id added
        // Then refresh page to see item added to existing list.
    })
})


getData()

