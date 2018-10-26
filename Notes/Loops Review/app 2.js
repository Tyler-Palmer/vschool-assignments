// Datatypes:

    // var string = 'hello'

    // var array = ["john", 2, 3, 4, 5]

    // var object = {
    //     name: 'john',
    //     age: 20,
    //     gender: 'male'
    // }            

    var person = {
        name: 'steve',
        age: 50,
        isAlive: true,
        friends: [
            {
                name: "john",
                age: 20
            }, 
            {
                name: "lisa",
                age: 31
            }
        ],
        address: {
            street: "123 abc Street",
            city: "SLC",
            state: "Ut",
            printAddress: function(){
                console.log(person.address.street)
            }
        },
        catchPhrase: function(){
            console.log('this is my catchphrase!')
        }
    }

    console.log(person.catchPhrase())
    console.log(person.address.printAddress())

    // var isLightTurnedOn = false


    // console.log(object.age)
    // console.log(object["age"])

    // console.log( string[string.length - 1] )
    // console.log( array[array.length - 1] )


// For Loops
    // write a for loop that console.log's the numbers 0 - 10

    // for(var i = 0; i < 11; i++){
    //     console.log(i)
    // }   

    // write a for loop that console.log's the even 
    // numbers from 0 - 100
        // for(var i = 0; i <= 100; i += 2){
        //     console.log(i)
        // }

        // for(var i = 0; i <= 100; i++){
        //     if(i % 2 === 0){
        //         console.log(i)
        //     }
        // }

    // write a for loop that prints every 5 numbers from 100 - 0
        // for(var i = 100; i >= 0; i -= 5){
        //     console.log(i)
        // }

var friends = [
    {
        name: "Rick",
        age: 70
    },
    {
        name: "Morty",
        age: 14
    },
    {
        name: "Jerry",
        age: 54
    },
    {
        name: "Summer",
        age: 18
    },
    {
        name: "Mr. Poopie Butthole",
        age: 31
    },
    {
        name: "Pickle Rick",
        age: 70
    }
]

    // 1. Write a for loop that console.log's every character's name
        // for(var i = 0; i < friends.length; i++){
        //     console.log(friends[i].name)
        // }


    // 2. Write a for loop that console.log's a string for each
    // character that has the following structure:
        // "'Name' is 'age' years old."
        for(var i = 0; i < friends.length; i++){
            // console.log(friends[i].name + " is " + friends[i].age + " years old.")
        }

    
    // 3. Add a new property to each of the objects
        // console.log the friends array after the loop
        // to make sure the property was added.
        for(var i = 0; i < friends.length; i++){
            friends[i].hasThisManySeries = 6
        } 

        // console.log(friends)

    // var person = {
    //     name: "Pickle Rick",
    //     age: 70
    // }

    // person.isAlive = true
    // console.log(person)

    // var i = 0;   Start point - iterator
    // i < 10;      Stop point
    // i++          Increment amount



    // hotkeys:
         // cmnd d                     - highlights multiple
         // option click               - multiple cursors
         // command + {  & command + } - move left right