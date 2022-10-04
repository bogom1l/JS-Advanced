const { expect } = require('chai');
const { sum } = require('./04.SumOfNumbers');

describe('testing sum', () => {

    it('should return correct results with array of numbers', () => {
        expect(sum([5, 5])).to.be.equal(10);
        expect(sum([3, 3])).to.be.equal(6);
    })

});

