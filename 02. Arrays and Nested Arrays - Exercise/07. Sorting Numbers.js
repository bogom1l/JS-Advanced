function solve(array) {
    
    let sortedNumbers = array.sort((a, b) => a - b);

    let result = [];

    while (sortedNumbers.length > 0) {
        result.push(sortedNumbers.shift());
        result.push(sortedNumbers.pop());
    }
    

    return result;;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

