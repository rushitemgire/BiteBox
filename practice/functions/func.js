// User Defined Function 
// function mult(p, q)
// {
//     m = p*q;
//     console.log('Multiplocation is: '+m);
// }
// mult(8, 5);  //Function call


// Built Ins 

// alert("This is home page.");
// let name = prompt('Enter your name: ');
// console.log(name);

// let s = "            I am happy             ";
// console.log(s.toUpperCase())
// console.log(s.trim());

// function income(salary){
//     console.log(salary*2);
// }
// income(20000);

// let increment = parseInt(prompt('Enter incentive: '));
// function income(salary){
//     let total = (salary*2)+increment;
//     console.log(total);
// }
// income(20000);

// let mult = function(p, q)
// {
//     m = p*q;
//     console.log('Multiplocation is: '+m);
// }
// mult(8, 5);


// function sayHello(){
//     console.log("Hello");
// }
// function higherOrder(sayHello)
// {
//     for(let i=1; i<=5; i++){
//         sayHello();
//     }
// }
// higherOrder(sayHello);


// Arrow function 

let greet = (name) => `Hello ${name}..!!`;
console.log(greet('Aditya'));

let greet1 = (name) => { return `Hello ${name}..!!`; }
console.log(greet1('Alok'));
