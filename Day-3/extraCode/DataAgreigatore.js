const sales = [
    { id: 1, region: 'North', amount: 500, category: 'Electronics' },
    { id: 2, region: 'South', amount: -100, category: 'Clothing' }, // A return
    { id: 3, region: 'North', amount: 200, category: 'Clothing' },
    { id: 4, region: 'West', amount: 1200, category: 'Electronics' },
    { id: 5, region: 'North', amount: -50, category: 'Electronics' } // A return
];

const nagative = sales.filter((n) => {
    if (n.amount < 0) {
        return n.amount;
    }
});
console.log(nagative);

//tax acrose the region
const tax = sales.reduce((acc, tax) => {

    if (acc[tax.region]) {
        acc[tax.region] += tax.amount;

    } else {
        acc[tax.region] = tax.amount;

    }
    return acc;
}, {});
console.log(tax);