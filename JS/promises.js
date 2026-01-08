const checkBook = new Promise((resolve, reject) => {
    console.log("Checking for book");

    setTimeout(() => {
        const bookAvailable = Math.random();   

    if(bookAvailable > 0.5) {
        resolve("Book is available");
    }
    else {
        reject("Book is not available");
    } 
    }, 1000);
});

checkBook
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error); 
})
.finally(() => {
    console.log("Finished checking for book");
}); 

