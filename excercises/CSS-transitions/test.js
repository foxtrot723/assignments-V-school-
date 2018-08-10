var chai = require("chai")
var myData = ("./app.js")
var people = myData.people
var olderThan18 = myData.olderThan18
var over18 = myData.over18
var peopleArr = myData.peopleArr
var assert = chai.assert


describe("should return an array of people older than 18", function() {
    it("returns an array of only people older than 18", function() {
        assert.deepEqual(olderThan18(people), over18)
    })
})