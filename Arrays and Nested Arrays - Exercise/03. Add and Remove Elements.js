function solve(arrayofCommands) {

    let result = [];
    let number = 1;

    for (let command of arrayofCommands) {
        
        switch(command) {
            case "add":
                result.push(number);
                number++;
                break;
            case "remove":
                result.pop(number);
                number++;
                break;
        }
    }

    if(result.length > 0) {
        console.log(result.join('\n'));
    }
    else{
        console.log('Empty');
    }
}


console.log('-'.repeat(10));

solve(['add', 'add', 'add', 'add']);

console.log('-'.repeat(10));

solve(['add', 'add', 'remove', 'add', 'add']);

console.log('-'.repeat(10));

solve(['remove', 'remove', 'remove']);