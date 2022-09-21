function solve(data) {
   
    let res = {};

    for(let el of data) { 

        let [town, product, price] = el.split(" | ");
        price = Number(price);

        if(res[product] == undefined) {
            res[product] = {};
        }

        res[product][town] = price;
    }

    for (const product in res) {
        const sortedProducts = Object.entries(res[product]).sort((a, b) => a[1] - b[1]);

        console.log(`${product} -> ${sortedProducts[0][1]} (${sortedProducts[0][0]})`);
    }

}


solve(['Sample Town | Sample Product | 1000','Sample Town | Orange | 2','Sample Town | Peach | 1','Sofia | Orange | 3','Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);

