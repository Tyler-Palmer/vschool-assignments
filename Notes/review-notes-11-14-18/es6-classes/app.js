    // Person

// ES5 Constructor - name, age, speak

// function Person(name, age){
//     this.name = name
//     this.age = age
//     // this.speak = function(){
//     //     console.log(`${this.name} says hi!`)
//     // }
// }

// Person.prototype.speak = function(){
//     console.log(`${this.name} says hi!`)
// }

// var eric = new Person("Eric", 70)
// var john = new Person("John", 70)

//     console.log(eric.speak())
//     console.log(john.speak())



// ES6 Class - name, age, speak
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // Automatically added to Object's Prototype
    speak(){
        console.log(`${this.name} says hi!`)
    }
}


var eric = new Person("Eric", 70)
var john = new Person("John", 70)

    console.log(eric.speak())
    console.log(john.speak())





