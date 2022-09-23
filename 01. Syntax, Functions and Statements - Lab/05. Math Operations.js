function myFunction(number1, number2, text){

    switch(text){
        case '+': 
            console.log(number1 + number2);
            break;
        case '-':
            console.log(number1 - number2);
            break;
        case '*':
            console.log(number1 * number2);
            break;
         case '/':
            console.log(number1 / number2);
            break;
        case '%':
             console.log(number1 % number2);
            break;
        case '**':
             console.log(number1 ** number2);
              break;
    }

}

//myFunction(1,2,'+');