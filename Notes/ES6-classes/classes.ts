//Classes
// function Vehicle (make, model){
//     this.make = make;
//     this.model = model;
//     this.drive = function(){
//         console.log('vrrooom')
//     }
// }

//with args
// class Vehicle {
//     constructor({make, model}){
//         this.make = make;
//         this.model = model;
//     }

//     drive(){
//         console.log('vroom')
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(args){
//         super(args)
//         this.wheelAmount = args.wheelAmount
//     }
// }


//without args
class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    drive(){
        console.log('vroom')
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, wheelAmount){
        super(make, model)
        this.wheelAmount = wheelAmount
    }
}

const harley = new Motorcycle('Harley', 'Nightster', 2)

console.log(harley)
harley.drive()