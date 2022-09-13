function myFunction(n = 5) {

    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n));
    }

}

myFunction(3);
console.log('-'.repeat(10));
myFunction(6);