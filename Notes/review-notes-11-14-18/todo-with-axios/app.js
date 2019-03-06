const getTodos = () => {
    axios.get('https://api.vschool.io/nateJ/todo').then(response => {
        listTodos(response.data)
    })
}


const listTodos = arr => {
    const todoList = document.getElementById('todo-container')
    for(let i = 0; i < arr.length; i++){
        const todo = document.createElement('h3')
        todo.textContent = arr[i].title

        todoList.appendChild(todo)
    }
}


const todoForm = document.addTodoForm
todoForm.addEventListener("submit", e => {
    e.preventDefault()
    const todoList = document.getElementById('todo-container')
    const newTodo = {}
    newTodo.title = todoForm.title.value
    axios.post('https://api.vschool.io/nateJ/todo', newTodo).then(response => {
        // Wipe out <div> containing all Todos, then recall 'get' function
        // to retrieve and render the updated list of todos
        todoList.innerHTML = ""
        getTodos()
    })  
    .catch(err => console.log(err)) 
    // Wipe user input field after submission
    todoForm.title.value = ""
})

getTodos()