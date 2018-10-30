// Higher Order Array Methods   
    // Definition - A function that either:
        // - takes one or more functions as arguments
        // - returns a function

// The standard for loop
    // var arr = [1, 2, 3, 4]
    // for(var i = 0; i < arr.length; i++){
    //     console.log(arr[i])
    // }


    // BASE SYNTAX for Higher Order Array Methods:   arr.map(function(item){})


// .forEach() => loops over array letting you perform operations
    // ALWAYS RETURNS UNDEFINED so you WONT set it equal to a variable like this
        // ex:  var finalArr = arr.forEach()

    // var newArr = []
    //
    // arr.forEach(function(num){
    //     newArr.push(num + 1)
    // })
    //
    // console.log(newArr)



// .map() => loops over the array
    // Returns a NEW array with specified changes, you will want to save result in a variable:
        // ex:  var newArr = arr.map()

    // var arr2 = [1, 2, 3, 4, 5, 6]

    // var newArr = arr2.map(function(item){
    //                 if(item % 2 === 0){
    //                     return item
    //                 } 
    //             })
    // console.log(newArr)



// .filter() => loops over the array
    // Returns a NEW array with filtered criteria ONLY. you will want to save result in a variable:
        // ex:  var newArr = arr.filter()

    // var filteredArray = arr2.filter(function(item){
    //                         if(item % 2 === 0){
    //                             return item
    //                         }
    //                     })
    // console.log(filteredArray)
