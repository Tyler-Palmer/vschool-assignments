const string = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."


const matchWord = str => {
    let obj = {}
    let arr = []
    let arrSpl = str.split(' ')
    for(let each of arrSpl){
        arr[each] = (arr[each] || 0) + 1
    }
    console.log(arr)
    const arrCount = arr => arr.sort(function(a,b){return a.length - b.length})
    return arrCount

}
console.log(matchWord(string))