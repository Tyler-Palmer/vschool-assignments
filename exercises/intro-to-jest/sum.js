function sum(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        return "Please provide two numbers"
    }
    return a + b
}

module.exports = sum