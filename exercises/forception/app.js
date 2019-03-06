var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
//console.log('test: ', people.shift(forCep))
function alphaJon(arr1, arr2){
        //console.log(people.shift('test:', forCep))
    var forCep = []
     for(i = 0; i < arr1.length; i++){
        forCep.push(arr1[i])
        for (j = 0; j < arr2.length; j++){
            forCep.push(arr2[j])
        }
     }
     return forCep;
}
   alphaJon(people,alphabet)
// console.log(people.shift(forCep))