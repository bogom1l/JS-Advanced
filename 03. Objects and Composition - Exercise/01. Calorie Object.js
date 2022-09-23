function solve(array) {

    let obj = { };

    for(let i = 0; i < array.length; i+=2) {
        let currProperty = array[i];
        let currValue = Number(array[i+1]);

        obj[currProperty] = currValue;
    }

    console.log(obj);
}


solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

console.log('--------------------');

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);