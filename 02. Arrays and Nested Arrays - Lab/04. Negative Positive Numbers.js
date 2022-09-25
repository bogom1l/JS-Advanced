function solve(array) {
    let finalArray = [];

    for (let num of array) {
        if(num < 0) {
            finalArray.unshift(num);
        }
        else {
            finalArray.push(num);
        }
    }
    
    //for (let number of finalArray) {
    //     console.log(number);
    //}

    console.log(finalArray);
}



solve([7, -2, 8, 9]);
console.log('--------');
solve([3, -2, 0, -1]);