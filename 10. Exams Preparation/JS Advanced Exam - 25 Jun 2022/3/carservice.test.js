const { assert, expect } = require('chai');
const { library, carService } = require('./03.CarService.js');

describe("Tests Car Service", function () {

    it("isItExpensive valid test 1", function () {
        expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`);
    });

    it("isItExpensive valid test 2", function () {
        expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`);
    });

    it("isItExpensive valid test 3", function () {
        expect(carService.isItExpensive("1")).to.equal(`The overall price will be a bit cheaper`);
    });

    it("isItExpensive valid test 4", function () {
        expect(carService.isItExpensive(1)).to.equal(`The overall price will be a bit cheaper`); //
    });


    it("discount invalid test 1", function () {
        expect(() => carService.discount('a', 'b')).to.throw("Invalid input");
    });

    it("discount invalid test 2", function () {
        expect(() => carService.discount('a', 1)).to.throw("Invalid input");
    });

    it("discount invalid test 3", function () {
        expect(() => carService.discount(1, 'b')).to.throw("Invalid input");
    });

    it("discount invalid test 4", function () {
        expect(() => carService.discount([], [])).to.throw("Invalid input");
    });

    it("discount invalid test 5", function () {
        expect(() => carService.discount({}, {})).to.throw("Invalid input");
    });

    it("discount valid test 1", function () {
        expect(carService.discount(4, 100)).to.equal(`Discount applied! You saved 15$`);
    });

    it("discount valid test 2", function () {
        expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`);
    });

    it("discount valid test 3", function () {
        expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`);
    });

    it("discount valid test 4", function () {
        expect(carService.discount(1, 100)).to.equal("You cannot apply a discount");
    });


    it("partsToBuy invalid test 1", function () {
        expect(() => carService.partsToBuy(1, 2)).to.throw("Invalid input");
    });

    it("partsToBuy invalid test 2", function () {
        expect(() => carService.partsToBuy('1', '2')).to.throw("Invalid input");
    });

    it("partsToBuy invalid test 3", function () {
        expect(() => carService.partsToBuy({}, {})).to.throw("Invalid input");
    });

    it("partsToBuy invalid test 4", function () {
        expect(() => carService.partsToBuy('111', 2)).to.throw("Invalid input");
    });

    it("partsToBuy invalid test 5", function () {
        expect(() => carService.partsToBuy(-51, -5)).to.throw("Invalid input");
    });


    it("partsToBuy valid test 1", function () {
        expect(carService.partsToBuy([], [4, 5, 6])).to.equal(0);
    });

    it("should", () => {
        assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 },], ["blowoff valve", "injectors"]), 145);
        assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
    });

});
