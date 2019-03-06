//  https://api.vschool.io/Natej/todo
// const axios = require('axios')

// 4 Main HTTP Request Types:
    // C - Create => POST  (must send 2nd argument object)
        axios.post('https://api.vschool.io/Natej/todo', { title: "New Title" }).then(response => {
            console.log(response.data) // Console logs the new Todo with added ._id
        })
        .catch(err => console.log(err))

    // R - Read   => GET
        axios.get('https://api.vschool.io/Natej/todo').then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))

    // U - Update => PUT   (must send 2nd argument object)
        axios.put('https://api.vschool.io/Natej/todo/<someTodoId>', { title: "Updated Title" }).then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))

    // D - Delete => DELETE
        axios.delete('https://api.vschool.io/Natej/todo/<someTodoId>').then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))
