var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

//1
//console.log(lyrics.join(' '))
//2
// lyrics.reverse();
// console.log(lyrics.join(' '));
//3

function everyOther(){
    var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
    for(let i = 0; i < lyrics.length; i+=2){
       var newArray = lyrics.shift()
        console.log(newArray)
    }

}
console.log(everyOther())

console.log(newArray.unshift())

// var newArray = []
// function everyOther(){
//     for(let i = 0; i < lyrics.length; i++){
//         if(lyrics[i].length % 2 === 0){
//             lyrics[i].shift()
//         }else{
//             console.log("It didn't work")
//         }
//     }
// }
// console.log(everyOther())

// console.log(newArray.unshift())