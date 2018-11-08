function findMissingNo(arr){
   const newVar = arr.sort(function(a,b) {return a-b})
   const newVar2 = Math.max(...newVar)
   console.log(newVar2)
   const missing = []
    for (let i = 1; i < newVar2; i++){    
        if (newVar.indexOf(i) === -1){
            missing.push(i)
        }
    }
    return missing
}

console.log(findMissingNo([3,5,6,8,1,2,10,100]))