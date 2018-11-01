var sum = require('./sum')

describe("the sum function", function(){

    it("should only receive numbers as inputs", function(){
        expect(sum('a', true)).toBe("Please provide two numbers")
    })

    //what you are testing
    test("adds 1 + 2 to equal 3", function(){
        
        expect(sum(1,2)).toBe(3)

    })

    it("should return a number", function(){
        expect(typeof sum(3,4)).toBe("number")
        expect(typeof sum("1", true)).not.toBe('number')
    })
})
//expect().toBe()

//Great for comparing primitive values
// expect(1).toBe(1)
// expect("hello").toBe("hello")
// expect(true).toBe(true)