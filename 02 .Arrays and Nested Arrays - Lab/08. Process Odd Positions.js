function solve(array) {

    return array
    .filter((el, i) => i % 2 != 0)
    .map(x => x * 2)
    .reverse();
    
}

console.log(solve([10, 15, 20, 25]));
console.log('------');
console.log(solve([3, 0, 10, 4, 7, 3]));