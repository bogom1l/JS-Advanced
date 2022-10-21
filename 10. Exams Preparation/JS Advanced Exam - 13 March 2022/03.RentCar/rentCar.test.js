const { expect, assert } = require('chai');
const { rentCar } = require('./rentCar');

describe("Testsssss", function () {

    it("searchCar tests", function () {
        expect(() => rentCar.searchCar(1, 2)).to.throw('Invalid input!');
        expect(() => rentCar.searchCar({}, {})).to.throw('Invalid input!');
        expect(() => rentCar.searchCar('a', [])).to.throw('Invalid input!');

        expect(() => rentCar.searchCar(['w', 'd'], 'a')).to.throw('There are no such models in the catalog!');
        expect(() => rentCar.searchCar(['waa', 'dwwwww'], 'qqqqq')).to.throw('There are no such models in the catalog!');

        expect(rentCar.searchCar(['a', 'b', 'c'], 'a')).to.be.equal(`There is 1 car of model a in the catalog!`);
        expect(rentCar.searchCar(['a', 'b', 'a'], 'a')).to.be.equal(`There is 2 car of model a in the catalog!`);
        expect(rentCar.searchCar(['a', 'b', 'c', 'w'], 'w')).to.be.equal(`There is 1 car of model w in the catalog!`);
        expect(rentCar.searchCar(['c', 'c', 'c'], 'c')).to.be.equal(`There is 3 car of model c in the catalog!`);
    });

    it("calculatePriceOfCar tests", function () {
        expect(() => rentCar.calculatePriceOfCar(1, 'a')).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar([], [])).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar({}, {})).to.throw('Invalid input!');
        expect(() => rentCar.calculatePriceOfCar(1.1, 2.2)).to.throw('Invalid input!');

        expect(() => rentCar.calculatePriceOfCar('a', 1)).to.throw('No such model in the catalog!');
        expect(() => rentCar.calculatePriceOfCar('b', -66)).to.throw('No such model in the catalog!'); //
        expect(() => rentCar.calculatePriceOfCar('c', 123)).to.throw('No such model in the catalog!');

        expect(rentCar.calculatePriceOfCar('Audi', 1)).to.be.equal(`You choose Audi and it will cost $36!`);
        expect(rentCar.calculatePriceOfCar('Volkswagen', 1)).to.be.equal(`You choose Volkswagen and it will cost $20!`);
        expect(rentCar.calculatePriceOfCar('Toyota', 1)).to.be.equal(`You choose Toyota and it will cost $40!`);
        expect(rentCar.calculatePriceOfCar('BMW', 1)).to.be.equal(`You choose BMW and it will cost $45!`);
        expect(rentCar.calculatePriceOfCar('Mercedes', 1)).to.be.equal(`You choose Mercedes and it will cost $50!`);
        expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.be.equal(`You choose Mercedes and it will cost $100!`);
    });

    it("checkBudget tests", function () {
        expect(() => rentCar.checkBudget(1.1, 2.2, 3.3)).to.throw('Invalid input!');
        expect(() => rentCar.checkBudget([], [], [])).to.throw('Invalid input!');
        expect(() => rentCar.checkBudget({}, {}, {})).to.throw('Invalid input!');
        expect(() => rentCar.checkBudget('a', 'b', 'c')).to.throw('Invalid input!');
        expect(() => rentCar.checkBudget(1, 2.2, 'qqqq')).to.throw('Invalid input!');

        expect(rentCar.checkBudget(1, 5, 4)).to.be.equal('You need a bigger budget!');
        expect(rentCar.checkBudget(4, 5, 2)).to.be.equal('You need a bigger budget!');

        expect(rentCar.checkBudget(4, 5, 2123)).to.be.equal(`You rent a car!`);
        expect(rentCar.checkBudget(4, 5, 4312)).to.be.equal(`You rent a car!`);

        expect(rentCar.checkBudget(4, 5, 20)).to.be.equal(`You rent a car!`);
    });

});
