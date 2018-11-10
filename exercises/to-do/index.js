
axios.get('https://api.vschool.io/tyler/todo/').then(function(response){
    console.log(response.data)
    listTodos(response.data)
})

//Step 1: Get Todos
function listTodos(arr){
    for (let i = 0; i < arr.length; i++){
    //Create new container for each Todo item
        const todoContainer = document.createElement('div')
    //Add a class to that container
        todoContainer.classList.add("todo")
        todoContainer.id = arr[i]._id

    //Create an html element
        const header1 = document.createElement("h1")
        const header2 = document.createElement("h1")
        const header3 = document.createElement("h1")
        
        const image = document.createElement("img")

        const title = document.createElement("h3")
        const description = document.createElement("h3")
        const completed = document.createElement("h3")

    //Part 3 Create checkbox and assign specific data ID

        const check = document.createElement("input")
        check.type = "checkbox"
        check.name = "checkOff"
        check.id = arr[i]._id

    //Part 4 Create Delete Button, assign specific data ID, create Event Listener for function to perform Delete
        
        const deleteD = document.createElement("button")
        deleteD.textContent = "Delete Item"
        deleteD.name = "deleteButton"
        deleteD.id = arr[i]._id
        deleteD.addEventListener('click', function(){
            deleteItem(this.id)
        })

    //Part 5 Create Edit Button, assign specific data ID, create Event Listener for function to perform Edit
        const edit = document.createElement("button")
        edit.textContent = "Edit Item"
        edit.name = "editButton"
        edit.id = arr[i]._id
        
        edit.addEventListener("click", function(){
            editItem(this.id)
        })

        //Part 5 Edit Form Creation
        const editForm = document.createElement("form")
        editForm.setAttribute("id", arr[i]._id)
        editForm.setAttribute("name", "formInput")
        editForm.classList.add("invisible")

        const formTitle = document.createElement("input")
        formTitle.type = "text"
        formTitle.setAttribute("name", "formTitle")

        const formDesc = document.createElement("input")
        formDesc.type = "text"
        formDesc.setAttribute("name", "formDesc")

        const formComplete = document.createElement("input")
        formComplete.type = "text"
        formComplete.setAttribute("name", "formComplete")


        const formImage = document.createElement("input")
        formImage.type = "text"
        formImage.setAttribute("name", "formImage")


        const formSave = document.createElement("button")
        formSave.textContent = "Save Item"
        formSave.name = "editSave"

    //Part 1 Put the Todo items inside of that element

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

        //Part 5 Edit Form information assignment
        formTitle.value = arr[i].title
        formDesc.value = arr[i].description
        formComplete.value = arr[i].completed
        formImage.value = arr[i].imgUrl

    //Put todo elements on the DOM in each todo DIV
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
        todoContainer.appendChild(editForm)
        
        editForm.appendChild(formTitle)
        editForm.appendChild(formDesc)
        editForm.appendChild(formComplete)
        editForm.appendChild(formImage)
        editForm.appendChild(formSave)
      
    //Put each todo DIV in the list-container main DIV and call function to check if item to be marked/unmarked complete
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
    const checkBox = document.querySelectorAll("input[name=checkOff]")
    console.log(checkBox)
    for(let i = 0; i < checkBox.length; i++){
        checkBox[i].addEventListener('change', function(event){
            event.preventDefault()
            const todoList2 = todo._id
            const complete = todo.completed    
            axios.put(`https://api.vschool.io/tyler/todo/${todoList2}`, {completed: !complete}).then(function(response){
            })
        })    
    }
}

//Part 4: Delete

function deleteItem(itemId){
    axios.delete(`https://api.vschool.io/tyler/todo/${itemId}`).then(function(response){
    })
}

//Part 5:
//Each Todo with have an "edit" Button
//When clicked, the info will change to input boxes that are autofilled with the old Todo data
//A user can change the value of these inputs
//When the "edit" button is clicked, it will change to a "save" button.
//When "save" is clicked, the form will disapear, and the new values will be displayed.
//On save, the todo will be edited in the database

function editItem(itemId){
    //Get the specific item to be edited by ID & toggle edit form to be visible
    let editItem = document.getElementById(itemId)
    for(let i = 0; i < editItem.childNodes.length - 1; i++){
        editItem.childNodes[i].classList.toggle("visibile");
    }
    //grab the form to edit (the last childNode, then listen for 'submit' from 'save' button)
    console.log(editItem.childNodes)
    editItem.childNodes[editItem.childNodes.length-1].style.display = "block"
    editItem.childNodes[editItem.childNodes.length-1].addEventListener("submit", function(event){
        event.preventDefault()
        //Grab the user input values, if no change to values, values stay the same
        let title;
        let description;
        let completed; 
        let image; 
        if(editItem.childNodes[editItem.childNodes.length-1].formTitle.value === ""){
        }else{
            title = editItem.childNodes[editItem.childNodes.length-1].formTitle.value
        }
        if(editItem.childNodes[editItem.childNodes.length-1].formDesc.value === ""){
        }else{
            description = editItem.childNodes[editItem.childNodes.length-1].formDesc.value
        }
        if(editItem.childNodes[editItem.childNodes.length-1].formComplete.value === ""){
        }else{
            completed = editItem.childNodes[editItem.childNodes.length-1].formComplete.value
        }
        if(editItem.childNodes[editItem.childNodes.length-1].formImage.value === ""){
        }else{
            image = editItem.childNodes[editItem.childNodes.length-1].formImage.value
        }
        //Place input values into object and use put request to assign the new/same values to the item
        var editTodo = {}
        editTodo.title = title
        editTodo.description = description
        editTodo.completed = completed
        editTodo.imgUrl = image
        axios.put(`https://api.vschool.io/tyler/todo/${editItem.childNodes[editItem.childNodes.length-1].id}`, editTodo).then(function(response){
            console.log(response.data)
        })
    })
}
