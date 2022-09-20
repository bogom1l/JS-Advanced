function cityTaxes(name, population, treasury) {

    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += this.population * this.taxRate; },
        applyGrowth(percentage) { this.population += Math.floor(this.population * percentage / 100); },
        applyRecession(percentage) { this.treasury -= Math.floor(this.treasury * percentage / 100); }
    };

    return city;
}

//--------------------------------------------------

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);


console.log();
console.log('-'.repeat(20));
console.log();


const city2 =
  cityTaxes('Tortuga',
  7000,
  15000);
city2.collectTaxes();
console.log(city2.treasury);
city2.applyGrowth(5);
console.log(city2.population);


