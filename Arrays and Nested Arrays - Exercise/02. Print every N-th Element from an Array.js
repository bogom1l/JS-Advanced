function solve(array, N) {

    let result = [];

    for (let i = 0; i < array.length; i+=N) {
        result.push(array[i]);
    }

    return result;
}


console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log('-'.repeat(10));
solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);
console.log('-'.repeat(10));
solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
);