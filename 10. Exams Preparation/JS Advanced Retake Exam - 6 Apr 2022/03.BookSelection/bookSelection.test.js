const { assert, expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe("Tests", function () {

    it("isGenreSuitable valid test", function () {
        expect(bookSelection.isGenreSuitable("Horror", 12)).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable("Horror", 11)).to.be.equal(`Books with Horror genre are not suitable for kids at 11 age`);
        expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable("Thriller", 11)).to.be.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
        expect(bookSelection.isGenreSuitable("a", 10)).to.be.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable("a", 20)).to.be.equal(`Those books are suitable`);
    });

    it("isItAffordable test", function () {
        expect(() => bookSelection.isItAffordable("a", "b")).to.throw("Invalid input");
        expect(() => bookSelection.isItAffordable([], [])).to.throw("Invalid input");
        expect(() => bookSelection.isItAffordable({}, {})).to.throw("Invalid input");
        expect(() => bookSelection.isItAffordable('3', [1, 2, 3])).to.throw("Invalid input");

        expect(bookSelection.isItAffordable(1, 3)).to.be.equal(`Book bought. You have ${3 - 1}$ left`);
        expect(bookSelection.isItAffordable(6, 3)).to.be.equal("You don't have enough money");
    });

    it("suitableTitles test", function () {
        expect(() => bookSelection.suitableTitles("a", "b")).to.throw("Invalid input");
        expect(() => bookSelection.suitableTitles([], 1)).to.throw("Invalid input");
        expect(() => bookSelection.suitableTitles(2, {})).to.throw("Invalid input");
        expect(() => bookSelection.suitableTitles('a', [])).to.throw("Invalid input");
        expect(() => bookSelection.suitableTitles({}, "b")).to.throw("Invalid input");

        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "asd", genre: "qwe" }], "qwe")).to.be.deep.equal(["asd"]);
    });

});
