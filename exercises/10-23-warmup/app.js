//
function isEven(){
    console.log("It's even!")
}
//
var isOdd = function(){
    console.log("It's odd!")
}
//
var buzzKill = function(){
    console.log("buzzkill")
}
//
var checkNumbers = function(arr){
    var newArr = []
    for(i=0; i<arr.length; i++){
        if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
            buzzKill();
        } else if(arr[i] % 2 === 0){
            isEven();
        }else{
            isOdd();
    }
}
}

checkNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])