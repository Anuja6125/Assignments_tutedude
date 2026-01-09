let inventory = [
    {
        id:1,
        title: "JS",
        author: "Author A",
        price: 30,
        inStock: true
    },
    {
        id:2,
        title:"Python",
        author: "Author B",
        price: 25,
        inStock: false
    },
    {
        id:3,
        title:"Java",
        price: 40,
        inStock: true
    },

    addBooks: function (book) {
        inventory.push(book);
   }
];

const listBooks = () => {
    return inventory.map(book => book.title);
}

const getAvailableBooks = () => {
    return inventory.filter(book => book.inStock);
}

const sellbook = (bookId) => {
    const book = inventory.find(b => b.id === bookId);
    if (book && book.inStock) {
        book.inStock = false;
        return `Sold: ${book.title}`;
    } else {
        return `Book not available`;
    }   
}

const totalprice = () => {
    return inventory.reduce((total, book) => total + book.price, 0);
}