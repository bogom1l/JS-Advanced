const { assert, expect } = require('chai');
const { library } = require('./library');

describe("Library Tests", () => {

    describe("calcPriceOfBook TESTS", () => {

        it("invalid input - name of the book", () => {
            expect( () => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
        });

        it("invalid input - year", () => {
            expect( () => library.calcPriceOfBook('1', '1')).to.throw('Invalid input');
        });

        it("valid data - 1", () => {
            expect(library.calcPriceOfBook('book1', 1970)).to.equal(`Price of book1 is 10.00`);
        });

        it("valid data - 2", () => {
            expect(library.calcPriceOfBook('book1', 1980)).to.equal(`Price of book1 is 10.00`);
        });

        it("valid data - 3", () => {
            expect(library.calcPriceOfBook('book1', 1990)).to.equal(`Price of book1 is 20.00`);
        });
        
     });

     describe("findBook TESTS", () => {

        it("invalid input - empty array", () => {
            expect( () => library.findBook([], 'book1')).to.throw('No books currently available');
        });

        it("valid input - 1", () => {
            expect(library.findBook(['book1', 'book2'], 'book1')).to.equal('We found the book you want.');
        });

        it("valid input - 2", () => {
            expect(library.findBook(['book1', 'book2'], 'book3')).to.equal('The book you are looking for is not here!');
        });

     });

     describe("arrangeTheBooks TESTS", () => {

        it("invalid input - 1", () => {
            expect( () => library.arrangeTheBooks('1')).to.throw('Invalid input');
        });

        it("invalid input - 2", () => {
            expect( () => library.arrangeTheBooks(-5)).to.throw('Invalid input');
        });

        it("valid input - 1", () => {
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
        });

        it("valid input - 2", () => {
            expect(library.arrangeTheBooks(30)).to.equal('Great job, the books are arranged.');
        });

        it("valid input - 3", () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it("valid input - 4", () => {
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        });

     });

});
