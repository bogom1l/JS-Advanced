function solve(string) {

    let result = string.toUpperCase()
    .match(/\w+/g)
    .join(', ');
  
    console.log(result);
}

solve('Hi, how are you?');
console.log('--------------');
solve('hello');