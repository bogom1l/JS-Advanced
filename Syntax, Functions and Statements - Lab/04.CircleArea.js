function myFunction(input) {
    let inputType = typeof(input);

    if(inputType == 'number') {
         let exit = Math.pow(input, 2) * Math.PI;
         console.log(exit.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }    
}



//myFunction(5);
//myFunction('asd');

