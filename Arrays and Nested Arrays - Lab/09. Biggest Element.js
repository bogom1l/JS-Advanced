function solve(matrix) {

    let biggestEl = -989899;
   
    for (let row = 0; row < matrix.length; row++) {

        const currentRow = matrix[row];

        for (let col = 0; col < currentRow.length; col++) {

            const currentElement = matrix[row][col];

            if (currentElement > biggestEl) {
                biggestEl = currentElement;
            }
        }
    }
    
    return biggestEl;
}

console.log(solve(
    [[20, 50, 10],
    [8, 33, 145]]
   ));

console.log('------');

console.log(solve(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));