function solve(array) {
    
    let result = [];
    
    let biggestEl = array.shift();
    result.push(biggestEl);

    for (let el of array) {
        if(el >= biggestEl) {
            biggestEl = el;
            result.push(el);
        }
    }
    
    return result;
}


console.log('-'.repeat(10));

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]));

console.log('-'.repeat(10));

console.log(solve([1, 
    2, 
    3,
    4]));

console.log('-'.repeat(10));
console.log(solve([20,3,2,15,6,1]));