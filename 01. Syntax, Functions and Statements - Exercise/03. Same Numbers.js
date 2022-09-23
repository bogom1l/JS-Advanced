function solve(number) {

    let numAsString = number.toString();

    let firstDigit = numAsString[0]; //.charAt(0) ?

    let areAllDigitsSame = true;
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++) {

        if(firstDigit != numAsString[i]) {
            areAllDigitsSame = false;
        }
        sum += Number(numAsString[i]);
    }

    console.log(areAllDigitsSame);
    console.log(sum);
}


solve(1111);
solve(1234);