class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = Number(0);
    }

    addCar(model, horsepower, price, mileage) {

        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) { // '<=' or '<' ?
            throw new Error("Invalid input!");
        }

        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${Number(mileage).toFixed(2)} km - ${Number(price).toFixed(2)}$`; //Number(mileage.toFixed(2) , Number(price.toFixed(2)
    }

    sellCar(model, desiredMileage) {

        let searchedCar = this.availableCars.find(c => c.model === model);

        if (!searchedCar) {
            throw new Error(`${model} was not found!`);
        }

        if (searchedCar.mileage > desiredMileage) {
            let difference = Number(searchedCar.mileage - desiredMileage);

            if (difference <= 40000) { //40.000 ? 40_000 ?
                searchedCar.price = searchedCar.price * 0.95;
            }
            else {
                searchedCar.price = searchedCar.price * 0.90;
            }
        }

        this.soldCars.push({ model: searchedCar.model, horsepower: searchedCar.horsepower, soldPrice: searchedCar.price });
        this.totalIncome += searchedCar.price;

        this.availableCars = this.availableCars.filter(c => c.model != model); //removing the car? XD

        return `${model} was sold for ${Number(searchedCar.price).toFixed(2)}$`; //Number(x)
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }

        let resArr = ["-Available cars:"];

        this.availableCars.forEach(c => {
            resArr.push(`---${c.model} - ${c.horsepower} HP - ${Number(c.mileage).toFixed(2)} km - ${Number(c.price).toFixed(2)}$`); //Number(x)
        });

        return resArr.join('\n');
    }

    salesReport(criteria) {
        if (criteria === 'horsepower') {
            this.soldCars = this.soldCars.sort((a, b) => (b.horsepower) - (a.horsepower));
        }
        else if (criteria === 'model') {
            this.soldCars = this.soldCars.sort((a, b) => (a.model).localeCompare(b.model));
        }
        else {
            throw new Error("Invalid criteria!");
        }

        let resArr = [`-${this.name} has a total income of ${Number(this.totalIncome).toFixed(2)}$`];
        resArr.push(`-${this.soldCars.length} cars sold:`);

        this.soldCars.forEach(c => {
            resArr.push(`---${c.model} - ${c.horsepower} HP - ${Number(c.soldPrice).toFixed(2)}$`); //Number(x)
        });

        return resArr.join('\n');
    }

}

/////////////////////////////////////

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
