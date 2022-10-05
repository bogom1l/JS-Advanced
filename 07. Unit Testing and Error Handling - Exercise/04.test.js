const { expect } = require('chai');
const { mathEnforcer } = require('./04.MathEnforcer');

describe('testing 4th task', () => {

    //test addFive
    it('secure that it returns undefined', () => {
        
        expect(mathEnforcer.addFive('1')).to.be.undefined;
        expect(mathEnforcer.addFive([1, 2, 3])).to.be.undefined;
        expect(mathEnforcer.addFive(true)).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
    });

    it('secure that it returns correct value', () => {
        
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(123)).to.equal(128);
        expect(mathEnforcer.addFive(66)).to.equal(71);
    });


    //subtractTen
    it('secure that it returns undefined', () => {
        
        expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        expect(mathEnforcer.subtractTen([1, 2, 3])).to.be.undefined;
        expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

    it('secure that it returns correct value', () => {
        
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        expect(mathEnforcer.subtractTen(123)).to.equal(113);
        expect(mathEnforcer.subtractTen(66)).to.equal(56);
    });

    //sum
    it('secure that it returns undefined', () => {
        
        expect(mathEnforcer.sum('1', true)).to.be.undefined;
        expect(mathEnforcer.sum([1, 2, 3], 5)).to.be.undefined;
        expect(mathEnforcer.sum(true, 1)).to.be.undefined;
        expect(mathEnforcer.sum(undefined, undefined)).to.be.undefined;
        expect(mathEnforcer.sum({}, {})).to.be.undefined;

        expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
        expect(mathEnforcer.sum(1, [1, 2, 3])).to.be.undefined;
        expect(mathEnforcer.sum({}, 'a')).to.be.undefined;
        expect(mathEnforcer.sum({}, 1)).to.be.undefined;
        expect(mathEnforcer.sum('a', 1)).to.be.undefined;

        expect(mathEnforcer.sum(5, 5)).to.be.closeTo(10, 1);
        expect(mathEnforcer.sum(-5, -2)).to.be.closeTo(-7, 1);

    });

    it('secure that it returns correct value', () => {
        
        expect(mathEnforcer.sum(0, 5)).to.equal(5);
        expect(mathEnforcer.sum(-5, -3)).to.equal(-8);
        expect(mathEnforcer.sum(123, -3)).to.equal(120);
        expect(mathEnforcer.sum(66, 100)).to.equal(166);

        expect(mathEnforcer.sum(5.05, 5.05)).to.be.closeTo(10.10, 0.01);
        expect(mathEnforcer.sum(5.05, 5)).to.be.closeTo(10.05, 0.01);
        expect(mathEnforcer.sum(-10.05, 5)).to.be.closeTo(-5.05, 0.01);
    });

});