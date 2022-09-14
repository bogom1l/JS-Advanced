function solve(speed, area) {

    if(area == 'motorway'){
        if(speed <= 130){
            console.log(`Driving ${speed} km/h in a ${130} zone`);
            return;
        }
    
        let diff = speed - 130;
        let message = 'reckless driving';
    
        if(diff <= 20){
            message = 'speeding';
        }
        else if(diff <= 40){ 
            message = 'excessive speeding';
        }
        
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${130} - ${message}`);
    }
    else if(area == 'interstate')
    {
        if(speed <= 90){
            console.log(`Driving ${speed} km/h in a ${90} zone`);
            return;
        }

        let diff = speed - 90;
        let message = 'reckless driving';
    
        if(diff <= 20){
            message = 'speeding';
        }
        else if(diff <= 40){ 
            message = 'excessive speeding';
        }
        
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${90} - ${message}`);
    }
    else if(area == 'city')
    {
        if(speed <= 50){
         console.log(`Driving ${speed} km/h in a ${50} zone`);
         return;
        }

        let diff = speed - 50;
        let message = 'reckless driving';
    
        if(diff <= 20){
            message = 'speeding';
        }
        else if(diff <= 40){ 
            message = 'excessive speeding';
        }
        
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${50} - ${message}`);
    }
    else if(area == 'residential')
    {
        if(speed <= 20){
            console.log(`Driving ${speed} km/h in a ${20} zone`);
            return;
        }

        let diff = speed - 20;
        let message = 'reckless driving';
    
        if(diff <= 20){
            message = 'speeding';
        }
        else if(diff <= 40){ //diff > 20 &&
            message = 'excessive speeding';
        }
        
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${20} - ${message}`);
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');