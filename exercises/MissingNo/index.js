function findMissingNo(arr){
   const newVar = arr.sort(function(a,b) {return a-b})
   console.log(newVar)
   const newVar2 = Math.max(...newVar)
   console.log(newVar2)
   const missing = []
   const mode ={}
   let modeMax = 0
    for(let each of newVar){
        mode[each] = (mode[each] || 0) + 1
   }
   console.log(mode)
   for (let each in mode){
        if(mode[each] >= modeMax){
            modeMax = each
        }
    }
    console.log(`The mode is: ${modeMax}`)

   let sum = 0
   const half = Math.floor(newVar.length/2)
   const median = function(){
       if(newVar.length % 2 === 0){
           console.log(`The median is: ${half}`)
       }else{
           console.log(`The median is: ${(newVar[half-1] + newVar[half+1])/2}`)
       }
   } 
   for (let i = 0; i < newVar.length; i++){
        sum += newVar[i]
   }


   for (let i = 1; i < newVar; i++){
        if (newVar.indexOf(i) === -1){
            missing.push(i)
        }
    }
    median()
    console.log(`The mean is: ${sum/newVar.length}`)
    console.log(missing)
    console.log(sum)

}

console.log(findMissingNo([3,5,5,5,6,6,8,1,2,10,15]))