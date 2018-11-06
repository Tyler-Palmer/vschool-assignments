var axios = require("axios");

axios.get('https://api.vschool.io/tyler/todo/').then(function(response){
    console.log(response.data)
    listTodos(response.data)
})

function listTodos(arr){

}