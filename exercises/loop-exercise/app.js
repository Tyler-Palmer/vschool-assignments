//1 print each letter of string individually
function myFunction1(str){
    for(i=0; i<str.length; i++){
        console.log(str.charAt(i));
    }
}
//myFunction1('this is a stringggg')

//2 iterate string and print position of first character of specified letter, if no letter, notify user

function myFunction2(str, char){
    for(i=0; i<str.length; i++){
        if (str.indexOf(char) >= 0){
            console.log(str.indexOf(char))
            return;
        }else{
            console.log(`there ain't no '${char}' in this string`)
            return;
        }
    }
}
//myFunction2('this is a string','s')

//3 array of numbers parameter, quit function when 42 is found let user know if 42 isn't found
var arr2 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60 ]
function myFunction3(arr){
    for(i=0; i < arr.length; i++){
        if (arr.indexOf(i) === 42){
            console.log(i)
            return;
        }else if (arr.indexOf(i) < 42) {
            console.log(i);
        }else{
            console.log('no 42 found here');
            return;
        }
    }
}
//myFunction3(arr2);

//4 function accepts 10 numbers in array then prints out smallest number out of ten without using Math.min()
arr10 =[]
// var randArr = function(){
//     for(i=0; i<11; i++){
//         arr10.push(Math.floor(Math.random() * 100));
//     }
// }
// randArr();
// console.log(arr10);
function myFunction4(){
    for(i=0; i<10; i++){
        arr10.push(Math.floor(Math.random() * 100));
    }
    console.log(arr10);
   var modArr10 = arr10.sort(function(a, b){return a-b});
   console.log(modArr10);
   console.log(modArr10[0])  
}
myFunction4()