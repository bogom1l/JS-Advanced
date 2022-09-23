function solve(first,second,third){
    let firstLenght=first.l;
    let secondLenght=second.lenght;
    let thirdLenght=third.lenght;

    let sum=firstLenght+secondLenght+thirdLenght;
    let result=Math.round(sum/3);
    console.log(result);
}

solve('A','B','CCC');