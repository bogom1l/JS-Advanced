class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        //string, Number

        if (this.spaceAvailable < spaceRequired) {
            throw new Error(`Not enough space in the garden.`);
        }

        this.plants.push({ plantName, spaceRequired: Number(spaceRequired), ripe: false, quantity: Number(0) });
        this.spaceAvailable -= Number(spaceRequired);

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        //string, Number

        let currentPlant = this.plants.find(p => p.plantName === plantName);

        if (!currentPlant) { // ?
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (Number(quantity) <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        currentPlant.ripe = true;
        currentPlant.quantity += Number(quantity);

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {

        let currentPlant = this.plants.find(p => p.plantName === plantName);

        if (!currentPlant) { // ?
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (currentPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants = this.plants.filter(p => p.plantName != plantName);

        let currentPlantQuantity = Number(currentPlant.quantity);

        this.storage.push({ plantName, quantity: currentPlantQuantity });

        this.spaceAvailable += currentPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let resArr = [`The garden has ${this.spaceAvailable} free space left.`];

        this.plants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

        resArr.push(`Plants in the garden: ${this.plants.map(p => p.plantName).join(', ')}`);

        if (this.storage.length > 0) {
            resArr.push(`Plants in storage: ${this.storage.map(p => {
                return `${p.plantName} (${p.quantity})`
            }).join(', ')}`);  //   {plant1Name} ({plant1Quantity}), {plant2Name}, ({plant2Quantity}), ..."`);
        }
        else {
            resArr.push(`Plants in storage: The storage is empty.`);
        }

        return resArr.join('\n');
    }

}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

//

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.generateReport());
