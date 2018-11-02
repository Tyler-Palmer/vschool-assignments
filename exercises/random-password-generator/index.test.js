var randomPasswordGenerator = require("./index.js")

describe("It should generate a random password", function(){
    it("should be a number", function(){
        expect(randomPasswordGenerator('string','number')).toBe('Your arguments need to be a number followed by a string')
    })
})
