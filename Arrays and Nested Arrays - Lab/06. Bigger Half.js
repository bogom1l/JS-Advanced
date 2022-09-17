function solve(array) {
    
    array.sort((a , b) => (a - b));

    return array.slice(array.length / 2);
}

console.log(solve([4, 7, 2, 5]));
console.log('*'.repeat(10));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));