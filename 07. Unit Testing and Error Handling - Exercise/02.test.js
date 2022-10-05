const { expect } = require('chai');
const { isOddOrEven } = require('./02.EvenOrOdd');

describe('testing 2nd task', () => {

    it('secure that it returns UNDEFINED', () => {

        expect(isOddOrEven(2)).to.be.undefined;
        expect(isOddOrEven(-2)).to.be.undefined;
        expect(isOddOrEven(0)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        
    });

    it('secure that it returns EVEN', () => {

        expect(isOddOrEven('aaaa')).to.equal('even');
        expect(isOddOrEven('bbbb')).to.equal('even');
        expect(isOddOrEven('aaaaaaaaaaaaaaaa')).to.equal('even');
        expect(isOddOrEven('ww')).to.equal('even');

    });

    it('secure that it returns ODD', () => {
        expect(isOddOrEven('aaaaw')).to.equal('odd');
        expect(isOddOrEven('bbbbw')).to.equal('odd');
        expect(isOddOrEven('aaaaaaaaaaaaaaaaw')).to.equal('odd');
        expect(isOddOrEven('www')).to.equal('odd');

    });

});