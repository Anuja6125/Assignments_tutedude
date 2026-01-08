const book = {
    title: "From Chaos to Clarity",
    author: "Me",
    price: 0.00,
    inStock: true,

    getDescription: () => {
        return `${book.title} by ${book.author} at ${book.price}`;
    }
}

book.genre = "Self-Help";
book['price'] *= 1.2;

let des = book.getDescription();
console.log(des);

