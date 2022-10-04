function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!validFaces.includes(face) || !Object.keys(validSuits).includes(suit)) {
        throw new Error('Error');
    }

    try {
        let obj = {
            face: face,
            suit: validSuits[suit],
        }

        return obj.face.toString() + obj.suit.toString();
    }
    catch(e) {
        throw new Error('Error');
    }

}

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C').toString());