// // Object Literal 
// let user = {
//     name: 'Aditya',
//     age: 20,
//     roll_no: 21,
//     college: 'MIT'
// }

// console.log(user);
// console.log(typeof user);

// // Object with new keyword
// let student = new Object();
// console.log(typeof student);
// console.log(student);
// student.name = 'Amol';
// student.email = 'amol@gmail.com';
// console.log(student);

// // Object with the help of constructor function 
// function car(color, noOfWheels, name, price){
//     this.color = color;
//     this.noOfWheels = noOfWheels;
//     this.name = name;
//     this.price = price;
// }
// const car1 = new car('White', 4, 'BMW-M5', 2500000);
// let sportCar = new car('red', 4, 'GT-Mustang', 7500000);
// console.log(car1);
// console.log(sportCar);
// console.log(sportCar.name);

// const vehicle = {
//     type: '2 Wheeler',
//     company: 'TVS',
//     info: {
//         name: 'Jupyter125',
//         color: 'Violet',
//         mileage: '50'
//     }
// }
// console.log(vehicle.info.name);


// let cart = {
//     product: 'Laptop',
//     price: 55000,
//     "discounted price" : 50000 
// }
// console.log(cart['discounted price']);
// cart.product = 'Mobile';
// console.log(cart);
// delete cart.product;
// console.log(cart);

// let cart = {
    // product: 'Laptop',
    // price: 55000,
//     "discounted price" : 50000 
// }
// console.log('Keys: '+ Object.keys(cart));
// console.log('Values: '+ Object.values(cart));
// console.log('Entries: ', Object.entries(cart));
// document.write('Entries: ', Object.entries(cart));


// let product = 'Laptop';
// let price = 55000;

// const cart = {
//     product,
//     price
// }
// console.log(cart.product);
// console.log(cart.price);


let keyName = 'email';
const user = {
    [keyName] : 'user@gmail.com'
}
console.log(user);