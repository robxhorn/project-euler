

function Puzzle1() {}

Puzzle1.prototype.sumAllIfDivisibleBy3or5UpTo = function (maxNumber) {
    var result = 0;

    function isDivisbleBy3() {
        return i % 3 == 0;
    }

    function isDivisbleBy5() {
        return i % 5 == 0;
    }

    for (i = 1; i < maxNumber; i++) {
        if (isDivisbleBy3() || isDivisbleBy5() ) {
            result += i;
        }
    }
    return result;
}

module.exports = Puzzle1;