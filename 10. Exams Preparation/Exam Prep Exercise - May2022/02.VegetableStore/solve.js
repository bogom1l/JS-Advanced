class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let typeArr = [];

        for (const currVegetableInfo of vegetables) {
            let [type, quantity, price] = currVegetableInfo.split(' ');

            quantity = Number(quantity); //make sure is Number
            price = Number(price); //make sure is Number

            let product = this.availableProducts.find(v => v.type == type);

            if (product == undefined) { //if not found in the availableProducts list then create a new one and add it to the list
                let newProduct = { type, quantity, price };
                this.availableProducts.push(newProduct);
                typeArr.push(type); //for printing purposes
            }
            else { //if already available then increase quantity and price
                product.quantity += quantity;

                if (price > product.price) {
                    product.price = price;
                }
            }
        }

        return `Successfully added ${typeArr.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const currProdInfo of selectedProducts) {
            let [currType, currQuantity] = currProdInfo.split(' ');
            currQuantity = Number(currQuantity);

            let product = this.availableProducts.find(v => v.type == currType);

            if (product == undefined) {
                throw new Error(`${currType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (currQuantity > product.quantity) {
                throw new Error(`The quantity ${currQuantity} for the vegetable ${currType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            let currPrice = product.price * currQuantity;
            product.quantity -= currQuantity;
            totalPrice += currPrice;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);
        let product = this.availableProducts.find(v => v.type == type);

        if (product == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > product.quantity) {
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        else {
            product.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        let resultArr = ['Available vegetables:'];

        this.availableProducts.sort((a, b) => a.price - b.price);

        this.availableProducts.forEach(product => resultArr.push(`${product.type}-${product.quantity}-$${product.price}`));

        resultArr.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return resultArr.join('\n');
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());


// let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');
// vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]); // "Successfully added Okra, Beans, Celery");
// vegStore.buyingVegetables(["Okra 1"]); // "Great choice! You must pay the following amount $3.50.");
// vegStore.buyingVegetables(["Banana 1","Okra 2"]); //.to.throw("Banana is not available in the store, your current bill is $0.00.");