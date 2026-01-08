function calculateTotal(price, quantity) {
    return price * quantity;
}

let res = calculateTotal(15, 3);
console.log(res); 

let res2 = calculateTotal(20, 5);
console.log(res2);

const cal = (price, quantity) => price * quantity;
let res3 = cal(10, 4);
console.log(res3);