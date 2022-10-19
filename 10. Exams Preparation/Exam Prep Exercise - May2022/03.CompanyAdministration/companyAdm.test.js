const { assert, expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

//93/100 idk too tired 

describe("Tests", function() {

    it("hiringEmployee invalid input1", function() {
        expect(() => companyAdministration.hiringEmployee('asd', 'test', 1)).to.throw('We are not looking for workers for this position.');
    });

    it("hiringEmployee invalid input2", function() {
        expect(() => companyAdministration.hiringEmployee('asd', 2, 1)).to.throw('We are not looking for workers for this position.');
    });

    it("hiringEmployee valid input1", function() {
        expect(companyAdministration.hiringEmployee('asd', 'Programmer', 3)).to.equal(`asd was successfully hired for the position Programmer.`);
    });

    it("hiringEmployee valid input2", function() {
        expect(companyAdministration.hiringEmployee('asd', 'Programmer', 4)).to.equal(`asd was successfully hired for the position Programmer.`);
    });

    it("hiringEmployee valid input3", function() {
        expect(companyAdministration.hiringEmployee('asd', 'Programmer', 35)).to.equal(`asd was successfully hired for the position Programmer.`);
    });

    it("hiringEmployee valid input4", function() {
        expect(companyAdministration.hiringEmployee('asd', 'Programmer', -35)).to.equal(`asd is not approved for this position.`);
    });

    it("hiringEmployee valid input5", function() {
        expect(companyAdministration.hiringEmployee('asd', 'Programmer', 0)).to.equal(`asd is not approved for this position.`);
    });

    it("hiringEmployee valid input6", function() {
        expect(companyAdministration.hiringEmployee('asd', 'Programmer', 2)).to.equal(`asd is not approved for this position.`);
    });

    //

    it("calculateSalary invalid input1", function() {
        expect(() => companyAdministration.calculateSalary(-1)).to.throws("Invalid hours");
    });

    it("calculateSalary invalid input2", function() {
        expect(() => companyAdministration.calculateSalary([])).to.throws("Invalid hours");
    });

    it("calculateSalary invalid input3", function() {
        expect(() => companyAdministration.calculateSalary({})).to.throws("Invalid hours");
    });

    it("calculateSalary invalid input4", function() {
        expect(() => companyAdministration.calculateSalary('123')).to.throws("Invalid hours");
    });

    it("calculateSalary valid input1", function() {
        expect(companyAdministration.calculateSalary(4)).to.equal(60);
    });

    it("calculateSalary valid input2", function() {
        expect(companyAdministration.calculateSalary(200)).to.equal(4000);
    });

    //


    it("firedEmployee invalid input1", function() {
        expect(() => companyAdministration.firedEmployee(1,2)).to.throw("Invalid input");
    });

    it("firedEmployee invalid input2", function() {
        expect(() => companyAdministration.firedEmployee([{}, {}],2.2)).to.throw("Invalid input");
    });

    it("firedEmployee invalid input3", function() {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'a')).to.throw("Invalid input");
    });

    it("firedEmployee invalid input4", function() {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], [])).to.throw("Invalid input");
    });

    it("firedEmployee invalid input5", function() {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -5)).to.throw("Invalid input");
    });

    it("firedEmployee invalid input6", function() {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2222)).to.throw("Invalid input");
    });

    it("firedEmployee invalid input7", function() {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw("Invalid input");
    });

    it("firedEmployee valid input1", function() {
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
    });

    it("firedEmployee valid input2", function() {
        expect(companyAdministration.firedEmployee(["Petarcho", "Ivancho", "Georgecho"], 0)).to.equal('Ivancho, Georgecho');
    });


    it("unknown1", function() {
        
    });


});





