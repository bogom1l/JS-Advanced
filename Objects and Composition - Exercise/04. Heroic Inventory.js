function solve(array) {
    const result = [];
    
    array.forEach(row => {
        let [name, level, items] = row.split(' / ');

        const hero = {};
        hero.name = name;
        hero.level = Number(level);
        hero.items = items ?items.split(', ') : [];

        result.push(hero);
    });

    return JSON.stringify(result);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
console.log('*'.repeat(10));
solve(['Jake / 1000 / Gauss, HolidayGrenade']);