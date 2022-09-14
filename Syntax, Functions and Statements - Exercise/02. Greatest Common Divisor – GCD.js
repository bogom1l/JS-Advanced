function solve(firstNumber, secondNumber) {
    let divisor = 0;
    
    for (let i = 1; i < 10; i++) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            divisor = i;
        }
    }

    console.log(divisor);
}


solve(15,5);