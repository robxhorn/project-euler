var chai = require('chai');
var expect = chai.expect;
var Puzzle1 = require('../../src/puzzle1/puzzle1');

describe('Puzzle1 Tests', function() {

    it('sumIfDivisibleBy3And5Of() should return 0 for 1', function() {
       var puzzle1 = new Puzzle1();
       expect(puzzle1.sumAllIfDivisibleBy3or5UpTo(1)).to.equal(0);
    });

    it ('sumIfDivisibleBy3And5Of() should return 3 for 4', function() {
        var puzzle1 = new Puzzle1();
        expect(puzzle1.sumAllIfDivisibleBy3or5UpTo(4)).to.equal(3);
    });

    it ('sumIfDivisibleBy3And5Of() should return 8 for 5', function() {
        var puzzle1 = new Puzzle1();
        expect(puzzle1.sumAllIfDivisibleBy3or5UpTo(6)).to.equal(8);
    });

    it ('exam question: sum of numbers divisible by 3 or 5 below 1000', function () {
        var puzzle1 = new Puzzle1();
        console.log('Total of numbers divisible by 3 or 5 up to 1000 is = ' + puzzle1.sumAllIfDivisibleBy3or5UpTo(1000));
    });

});
