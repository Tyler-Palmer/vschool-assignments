// Create 10 objects from things you see.
// Each object should have at least 3 keys (properties).
// Have at least one boolean, string, number, array, nested object, etc.
// Each object should have at least one method.

// var pen = {
//     color: "Black",
//     price: 2,
//     isGelPen: false,
//     write: function() {
//         console.log("I'm a " + this.color + " pen that costs $" + this.price);
//     }
// }

// Extra Credit:

// Call a method from one object that then calls a method nested in another.
// place all of your objects into an array and call your functions.
// Nest one object within another, within another object, within another.
// Create and call a method in one object that calls a method nested at the deepest level of your deeply nested object.

var waterBottle = {
    bottlecolor: 'silver',
    lidColor: 'black',
    holdsWater: true,
    fillLevel: 'half full',
    isA: 'container',
    drink: function(){
        console.log("I'm a " + this.isA + "that is " + this.fillLevel)
    }
}

var iPhone = {
    color: 'black',
    isA: 'iPhone',
    manufacturer: 'Apple',
    hasCellSignal: true,
    voiceName: 'Siri',
    talkToMe: function(){
        if(hasCellSignal === true){
            console.log("Hi, may name is " + this.voiceName + " I am here to help you with your " + this.color + this.isA + " from " + this.manufacturer)
        }
    }
}

var table = {
    color: 'brown',
    isStable: true,
    legs: 4,
    thingsOnTable1: coffeeMug, iphone, waterBottle,
    thingsOnTable2: "1 computer and a burrito",
    isThereRoom: function(){
        if(isStable === true){
            console.log("The " + color + " table has " + this.legs + " and there are" + this.thingsOnTable1 + " and" + this.thingsOnTable2 + " I think there is room for more")
        }
    }
}

var mug = {
    color1: 'clear',
    color2: 'red',
    print: 'OSU Go Bucks',
    hotLiquids: ['coffee', 'tea',],
    contains: hotLiquids,
    drinkFrom: function(){
        console.log("Mmmm this" + this.hotLiquids[0] + "is delicious in my " + this.color2 + " mug")
    }


}


