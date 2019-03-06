const Table = (num) => {
    let result = [[0],]
    for(var i = 1; i < num+1; i++){
        result[i] = []
        for(var j = 1; j < num+1; j++)
        result[i].push([i]*[j])
    }
    return result
}
console.log(Table(10))