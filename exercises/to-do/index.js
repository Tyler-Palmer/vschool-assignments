
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

    //Part 3 Checkbox

        var check = document.createElement("input")
        check.type = "checkbox"
        check.name = "checkOff"
        check.setAttribute("id", arr[i]._id)
        
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
        console.log(response.data) //Should be a new todo with an #id added
    }).catch(function(error){
        console.log(error)
    })
})

//Part 3: Put Part 1, "Put" new value of complete or incomplete in database

function checkOffNow (todo){
    var checkBox = document.querySelectorAll("input[name=checkOff]")
    console.log(checkBox)
    for(var i = 0; i < checkBox.length; i++){
        console.log(checkBox[i])
        checkBox[i].addEventListener('change', function(event){
            event.preventDefault()
            var todoList2 = todo._id
            var complete = todo.completed    
            axios.put(`https://api.vschool.io/tyler/todo/${todoList2}`, {completed: !complete}).then(function(response){
            })
        })    
    }
}


// function checkOffNow (arr){
//     var checkBox = document.querySelectorAll("input[name=checkOff]")
//     console.log(checkBox)
//     var toDoContainer2 = document.getElementsByClassName("list-container")
//     for(var i = 0; i < checkBox.length; i++){
//         checkBox[i].addEventListener('change', function(event){
//             event.preventDefault()
//             console.log(arr[i])
//             console.log(checkBox[i])
//             if(this.checked){
//                 var complete
//                 axios.get('https://api.vschool.io/tyler/todo/').then(function(response){
//                     complete = response.data.completed
//                     axios.put('https://api.vschool.io/tyler/todo/' + this._id), {completed: !complete}
//                 })
//             }else{
//                 console.log("It's not checked")
//             }
//         })
//     }
// }