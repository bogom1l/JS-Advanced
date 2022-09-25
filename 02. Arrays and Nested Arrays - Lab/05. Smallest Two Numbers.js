function solve(array) {
    let finalArray = [];

    array.sort((a,b) => a - b);

    finalArray.push(array[0]);
    finalArray.push(array[1]);

    console.log(finalArray.join(' '));
}


solve([30, 15, 50, 5]);
console.log('*'.repeat(10));
solve([3, 0, 10, 4, 7, 3]);

