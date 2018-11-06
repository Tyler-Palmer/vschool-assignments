
axios.get('https://api.vschool.io/tyler/todo/').then(function(response){
    console.log(response.data)
    listTodos(response.data)
})

//Step 1: Get Todos
function listTodos(arr){
    for (var i = 0; i < arr.length; i++){
    //Create new container for each Todo item
    var todoContainer = document.createElement('div')
    //Add a class to that container
    todoContainer.classList.add("todo")

    //Create an html element
    var header1 = document.createElement("h1")
    var header2 = document.createElement("h1")
    var header3 = document.createElement("h1")
    var image = document.createElement("img")

    var title = document.createElement("h3")
    var description = document.createElement("h3")
    var completed = document.createElement("h3")
    
    //Put the Todo items inside of that element
    header1.textContent = "Title:"
    title.textContent = arr[i].title

    header2.textContent = "Description:"
    description.textContent = arr[i].description

    if(arr[i].completed === true){
        todoContainer.classList.add("finished")
    }

    header3.textContent = "Completed:"
    completed.textContent = arr[i].completed

    //Put element on the DOM
    todoContainer.appendChild(header1)
    todoContainer.appendChild(title)

    todoContainer.appendChild(header2)
    todoContainer.appendChild(description)

    todoContainer.appendChild(header3)
    todoContainer.appendChild(completed)

    document.getElementById("list-container").appendChild(todoContainer)
    }
}

//Part 2: Post a new Todo

var toDoForm = document.addTodoForm

toDoForm.addEventListener("submit", function(event){
    event.preventDefault()
    //When the user submits//Grab the user input
    var title = toDoForm.title.value
    var description = toDoForm.description.value
    var completed = toDoForm.completed.value

    //Put dat input in a new object
    var newToDo = {}
    newToDo.title = title
    newToDo.description = description
    newToDo.completed = completed
    //Send a Post request
    axios.post("https://api.vschool.io/tyler/todo", newToDo).then(function(response){
        console.log(response.data) //Should be a new todo with an #id added
    }).catch(function(error){
        console.log(error)
    })
})