const { assert, expect } = require('chai');
const { chooseYourCar } = require('./chooseYourCar');

describe("Testsss oo ye letsgo wagmi brothers", function () {

    it("choosingType tests", function () {
        expect(() => chooseYourCar.choosingType('b', 'a', 1)).to.throw(`Invalid Year!`);
        expect(() => chooseYourCar.choosingType('b', 'a', 123231)).to.throw(`Invalid Year!`);

        expect(() => chooseYourCar.choosingType('b', 'a', 2000)).to.throw(`This type of car is not what you are looking for.`);

        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.be.equal(`This red Sedan meets the requirements, that you have.`);
        expect(chooseYourCar.choosingType('Sedan', 'green', 2014)).to.be.equal(`This green Sedan meets the requirements, that you have.`);

        expect(chooseYourCar.choosingType('Sedan', 'red', 2009)).to.be.equal(`This Sedan is too old for you, especially with that red color.`);
        expect(chooseYourCar.choosingType('Sedan', 'red', 2002)).to.be.equal(`This Sedan is too old for you, especially with that red color.`);

    });

    it("brandName tests", function () {
        expect(() => chooseYourCar.brandName('b', [])).to.throw("Invalid Information!");
        expect(() => chooseYourCar.brandName({}, {})).to.throw("Invalid Information!");
        expect(() => chooseYourCar.brandName(2, 'a')).to.throw("Invalid Information!");
        expect(() => chooseYourCar.brandName(3.4, 3.4)).to.throw("Invalid Information!");
        expect(() => chooseYourCar.brandName([], 'qqq')).to.throw("Invalid Information!");

        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -4)).to.throw("Invalid Information!");
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 431)).to.throw("Invalid Information!");
        expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)).to.throw("Invalid Information!");

        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.be.equal("Toyota, Peugeot");
        expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.be.equal("BMW, Toyota");
    });

    it("carFuelConsumption tests", function () {
        expect(() => chooseYourCar.carFuelConsumption('b', 'a')).to.throw("Invalid Information!");
        expect(() => chooseYourCar.carFuelConsumption([], [])).to.throw("Invalid Information!");
        expect(() => chooseYourCar.carFuelConsumption({}, {})).to.throw("Invalid Information!");
        expect(() => chooseYourCar.carFuelConsumption('b', 4)).to.throw("Invalid Information!");

        expect(() => chooseYourCar.carFuelConsumption(-5, -5)).to.throw("Invalid Information!");
        expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!");

        expect(chooseYourCar.carFuelConsumption(100, 10)).to.be.eq(`The car burns too much fuel - 10.00 liters!`);

        expect(chooseYourCar.carFuelConsumption(100, 5)).to.be.eq(`The car is efficient enough, it burns 5.00 liters/100 km.`);
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.eq(`The car is efficient enough, it burns 7.00 liters/100 km.`);
    });


    it("unknown", function () {

    });

});
