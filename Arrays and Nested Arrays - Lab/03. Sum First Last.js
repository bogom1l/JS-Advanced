function solve(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());

    console.log(first + last);
}

solve(['20', '30', '40']);
console.log('--------');
solve(['5', '10']);