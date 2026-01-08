

const inventory = [
    {
        title : "How to Cook",
        author: "Jane Doe",
        price: 29.99,
        inStock: true
    },

    {
        title : "JavaScript Basics",
        author: "John Smith",
        price: 39.99,
        inStock: false
    },

    {
        title : "CSS Design",
        author: "Emily Johnson",
        price: 24.99,
        inStock: true
    }
]

console.log(inventory);

inventory.push({
    title : "HTML for Beginners",
    author: "Michael Brown",
    price: 19.99,
    inStock: true    
});

const titles = inventory.map(book => book.title);
console.log(titles);

const availableBooks = inventory.filter(book => book.inStock);
console.log(availableBooks);

const totalValue = inventory.reduce((total, book) => total + book.price, 0);
console.log(totalValue);