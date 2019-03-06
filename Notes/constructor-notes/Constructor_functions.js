// function Car (mk, yr, mdl, color){
//     this.make = mk;
//     this.age = yr;
//     this.model = mdl;
//     this.color = color;
//     this.nos = function (){
//         console.log('Vrooooooooom')
//     }
//     this.changeColor = function(newColor){
//         this.color = newColor
//     }
//     this.growOlder = function(newAge){
//         this.age++
//     }
// }


// var subaru = new Car ("Subaru", 20, "Outback", "Black")
// console.log(subaru)
// subaru.changeColor('blue')
// subaru.growOlder()
// subaru.growOlder()
// subaru.growOlder()
// subaru.growOlder()
// console.log(subaru)

function Person (name, hp, attacks){
    this.name = name;
    this.hp = hp;
    this.attacks = attacks;
    this.hit = function(newHp){
        this.hp -= newHp
    }
}

var tyler = new Person ('Tyler', 9001, ['kameyha meyha', 'kick'])
console.log(tyler)
tyler.hit(Math.floor(Math.random()*1000))
console.log(tyler)

