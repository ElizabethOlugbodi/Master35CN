// Functions
// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = true;
//  } else {

//      console.log("Grinding is about to begin");
//      coffeeIsGrinding = true; 
//  }
//     }

// pressGrindBeans();

// Activity 1
// Take this code and return it into arrow function syntax:
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// Solution
// const factorial = (n) => {
//   if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//       return (n * factorial(n-1));
//     };
// }
// console.log(factorial (33));

// Activity 2
// Edit below snippet to include two parameters and a running order count updated when the function is called:

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log (`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");

// Solution

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} & ${topping2}`);
//   orderCount++;
//   console.log(`Order count = ${orderCount}`)
// }
// takeOrder ("pepperoni", "cheese");

// Activity 3

// Solution
let pinNumber = 8447;
let balance = 1857

const cashMachine = (pin, amount) => {

if ((pin === pinNumber) && (amount <= balance)){
    const newBalance = balance - amount;
    console.log(`PIN accepted! your withdrawal is £${amount}, and you have the balance of £${newBalance} in your account.`)
} else if ((pin === pinNumber) && (amount > balance)){
    console.log(`Your current balance is £${balance}, your withdrawal cannot exceed your balance`)
} else if (pin != pinNumber){
    console.log("PIN not accepted, please enter the correct PIN number!")
  }

cashMachine(8447, 500);
}