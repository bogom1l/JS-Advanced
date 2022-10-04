const { expect } = require('chai');
const { isSymmetric } = require('./05. Check for symmetry');

describe('testing the symmetry', () => {


    it('should return false if input is not correct type', () => {
        //Arrange
        let input = 'Not array';

        //Act
        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.false;
    });


    it('should return true if input array is symmetric', () => {
        //Arrange
        let input = [1, 2, 3, 4, 3, 2, 1];

        //Act
        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.true;
    });

    it('should return false if input array is not symmetric', () => {
        //Arrange
        let input = [1, 2, 3, 4, 5, 6, 7];

        //Act
        let result = isSymmetric(input);

        //Assert
        expect(result).to.be.false;
    });


    it('Returns false if we provide something different from Array type', () => {
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric('1')).to.be.false;
        expect(isSymmetric(1, 1)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric()).to.be.false;
    })

    it('Returns true if array is symmetric', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
        expect(isSymmetric([2, 2, 2, 2])).to.be.true;
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    })

    it('Returns false if array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3, 3, 1])).to.be.false;
        expect(isSymmetric([1, 2, 3, 1])).to.be.false;
    })

    it('Returns false if type-different array', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    })

});
