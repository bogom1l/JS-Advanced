function fruit(type, weight, pricePerKg) {
    let kg = weight / 1000;
    let totalPrice = kg * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);