const { expect } = require('chai');
const { lookupChar } = require('./03.CharLookup');

describe('testing 3rd task', () => {

    it('secure that it returns UNDEFINED', () => {

        expect(lookupChar(2, 1)).to.be.undefined;
        expect(lookupChar('asd', 1.2)).to.be.undefined;
        expect(lookupChar([1,2,3], 1)).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;

        
    });

    it('secure that it returns "Incorrect index"', () => {

        expect(lookupChar('hello', 44)).to.equal('Incorrect index');
        expect(lookupChar('hello', -25)).to.equal('Incorrect index');

    });

    it('secure that it returns string', () => {

        expect(lookupChar('hello', 1)).to.equal('e');


    });

});