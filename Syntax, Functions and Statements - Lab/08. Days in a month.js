function myFunction(month, year) {

    let days = new Date(year, month, 0).getDate();
    console.log(days);

}

myFunction(1, 2012);
console.log('-'.repeat(10));
myFunction(2, 2021);
myFunction(6, 2021);