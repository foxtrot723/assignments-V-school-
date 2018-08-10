var chai = require("chai")
var myFunctions = require("./app.js")
var assert = chai.assert
console.dir(myFunctions)
var addS = myFunctions.addS

describe("create a function that adds s to the end of every string", function(){
    it("should end with s", function() {
        assert.deepEqual(addS(["dog", "cat", "alligator"]), ["dogs", "cats", "alligators"])
    })
    it("Should not allow numbers into array", function() {
        assert.equal(addS(["dogs", 0, 3]), "no numbers")
    })
})