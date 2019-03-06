var countCode = require("./index")

describe("The countCode function", function(){
    it("should receive a string as its argument", function(){
        expect(countCode(9)).toBe("You must provide a string as an argument")
        expect(countCode(true)).toBe("You must provide a string as an argument")
    })
    
    it("should return a number",function(){
        expect(typeof countCode("somestring")).toBe("number")
    })
    test("should return correct code count amaount", function(){
        // countCode("aaacodebbb") returns 1
        expect(countCode("aaacodebbb")).toBe(1)
        // countCode("codexxcode") returns 2
        expect(countCode("codexxcode")).toBe(2)
        // countCode("cozexxcope") returns 2
        expect(countCode("cozexxcope")).toBe(2)
    })
})

//Output: 
// countCode("aaacodebbb") returns 1
// countCode("codexxcode") returns 2
// countCode("cozexxcope") returns 2