function solve() {

    class Person {
        
        constructor(fName, lName, age, email) {
            this.firstName = fName;
            this.lastName = lName;
            this.age = age;
            this.email = email;
        }
    
    
        toString() { 
            return this.firstName + ' ' + this.lastName + ' (age: ' + this.age + ', email: ' + this.email + ')';
        }
    }
    
        const person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
        const person2 = new Person('SoftUni');
        const person3 = new Person('Stephan', 'Johnson', 25);
        const person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    
        const people = [person1, person2, person3, person4];
    
        return people;
    }
    
    
    
    