inventory = [
    {    
        name: "Javascript",
        price: 20
    },

    {
        name: "Python",
        price : 25
    }
]


const [item1, item2] = inventory;
console.log(item1);

const {name, price} = item1;
console.log(name);


newArrivals = [
    {
        name: "Java",
        price: 30
    },
    {
        name: "C++",
        price: 35
    }
]

const finalInventory = [...inventory, ...newArrivals];
console.log(finalInventory);

const secondBook = {
    ...item2,    
    price: item2.price - item2.price * 0.1,
    onSale: true    
};

console.log(secondBook);
