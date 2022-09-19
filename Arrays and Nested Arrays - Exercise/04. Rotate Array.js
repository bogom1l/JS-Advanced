function solve(arrayofStrings, rotations) {
    
    for (let i = 0; i < rotations; i++) {
        let currEl = arrayofStrings.pop();
        arrayofStrings.unshift(currEl);
    }

    console.log(arrayofStrings.join(' '));
}


console.log('-'.repeat(10));

solve(['1', '2', '3', '4'], 2);

console.log('-'.repeat(10));

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

console.log('-'.repeat(10));

