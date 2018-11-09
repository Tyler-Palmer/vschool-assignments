
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
        todoContainer.setAttribute("id", arr[i]._id)

    //Create an html element
        var header1 = document.createElement("h1")
        var header2 = document.createElement("h1")
        var header3 = document.createElement("h1")
        
        var image = document.createElement("img")

        var title = document.createElement("h3")
        var description = document.createElement("h3")
        var completed = document.createElement("h3")

    //Part 3 Checkbox

        var check = document.createElement("input")
        check.type = "checkbox"
        check.name = "checkOff"
        check.setAttribute("id", arr[i]._id)

    //Part 4 Delete Button
        
        var deleteD = document.createElement("button")
        deleteD.textContent = "Delete Item"
        deleteD.name = "deleteButton"
        deleteD.setAttribute("id", arr[i]._id)
        deleteD.addEventListener('click', function(){
            deleteItem(this.id)
        })

    //Part 5 Edit Button
        var edit = document.createElement("button")
        edit.textContent = "Edit Item"
        edit.name = "editButton"
        edit.setAttribute("id", arr[i]._id)
        edit.addEventListener("click", function(){
            editItem(this.id)
        })

    //Put the Todo items inside of that element

        header1.textContent = "Title:"
        title.textContent = arr[i].title

        header2.textContent = "Description:"
        description.textContent = arr[i].description

        if(arr[i].completed){
            todoContainer.classList.add("finished")
        }

        header3.textContent = "Completed:"
        completed.textContent = arr[i].completed

        image.src = arr[i].imgUrl

    //Put element on the DOM
        todoContainer.appendChild(header1)
        todoContainer.appendChild(title)

        todoContainer.appendChild(header2)
        todoContainer.appendChild(description)

        todoContainer.appendChild(header3)
        todoContainer.appendChild(completed)
        
        todoContainer.appendChild(check)

        todoContainer.appendChild(deleteD)

        todoContainer.appendChild(edit)
        
        if (arr[i].imgUrl){
            todoContainer.appendChild(image)
        }else{
            console.log("No image")
        }

        document.getElementById("list-container").appendChild(todoContainer)
        
        checkOffNow(arr[i])
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
    var image = toDoForm.image.value

    //Put dat input in a new object
    var newToDo = {}
    newToDo.title = title
    newToDo.description = description
    newToDo.completed = completed
    newToDo.imgUrl = image
    //Send a Post request
    axios.post("https://api.vschool.io/tyler/todo", newToDo).then(function(response){
        // console.log(response.data) //Should be a new todo with an #id added
    }).catch(function(error){
        console.log(error)
    })
})

//Part 3: Put Part 1, "Put" new value of complete or incomplete in database

function checkOffNow (todo){
    var checkBox = document.querySelectorAll("input[name=checkOff]")
    console.log(checkBox)
    for(let i = 0; i < checkBox.length; i++){
        checkBox[i].addEventListener('change', function(event){
            event.preventDefault()
            var todoList2 = todo._id
            var complete = todo.completed    
            axios.put(`https://api.vschool.io/tyler/todo/${todoList2}`, {completed: !complete}).then(function(response){
            })
        })    
    }
}

//Part 4: Delete

function deleteItem(itemId){
    // var deleteButt = document.querySelectorAll("button[name=deleteButton]")
    // console.log(deleteButt)
    // var toBeDeleted = deleteItem._id
    // console.log(toBeDeleted)
    // for (let i = 0; i < deleteButt.length; i++){
    //     deleteButt[i].addEventListener('click', function(event){
    //         event.preventDefault()
    //         console.log(`The item to be deleted is: ${toBeDeleted}`)
            axios.delete(`https://api.vschool.io/tyler/todo/${itemId}`).then(function(response){
            })
    //     })
    // }
}

//Part 5:
//Each Todo with have an "edit" Button
//When clicked, the info will change to input boxes that are autofilled with the old Todo data
//A user can change the value of these inputs
//When the "edit" button is clicked, it will change to a "save" button.
//When "save" is clicked, the form will disapear, and the new values will be displayed.
//On save, the todo will be edited in the database

function editItem(itemId){
    
}
