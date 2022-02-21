// ARRAYs

//Class Activities

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder);

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
    // "Charlie - Whatever's new"
 // ];
    
// console.log(coffeeOrder[2]);

// coffeeOrder[1] = "Ann - Vanilla latte";

// console.log(coffeeOrder);

// Properties

// .length()- will indicate number of items in the array
// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
//     ];
// console.log(coffeeOrder.length);


// .push method- adds to the end of your array
// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
// coffeeOrder.push("Donna - espresso");

// console.log(coffeeOrder)

// .pop method- Removes last item from the end of your array
// let coffeeOrder = [
//        "Alex - Cortado",
//         "Ben - Cortado",
//         "Charlie - Whatever's new"
// ];

// coffeeOrder.pop();

// console.log(coffeeOrder)
    

// Activity 1

// let favSongs = [
//     "Smooth - Operator",
//     "Lifted",
//     "Ocean Drive"
// ]

// console. log(favSongs);

//  using .push method, add 2 more songs

// let favSongs = [
//     "Smooth - Operator",
//     "Lifted",
//     "Ocean Drive"
// ];


// favSongs.push("Perfect", "Shivers");

// console.log(favSongs)

// using .pop method to remove the last song 

// let favSongs = [
//         "Smooth - Operator",
//         "Lifted",
//         "Ocean Drive"
//     ];

//     favSongs. pop();

//     console.log(favSongs)
        

// // Activity 2

// Using MDN and choosing shift() to create programme that demonstrate the use

// let favSongs = [
//             "Smooth - Operator",
//             "Lifted",
//             "Ocean Drive"
//         ];
// let firstElement = favSongs.shift();

// console.log(favSongs);

// console.log(firstElement);

// LOOPs
// For Loop

// Class Activity 1
// let favDrinks = ["Tea", "Water", "Juice", "Soda", "Beverages"];
// console.log (favDrinks[0]);
// console.log (favDrinks[1]);
// console.log (favDrinks[2]);
// console.log (favDrinks[3]);
// console.log (favDrinks[4]);

// for(let i = 1; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }

// Using for loops with if an statement

// let favDrinks = ["Tea", "Water", "Juice", "Soda", "Beverages"];
// console.log (favDrinks[0]);
// console.log (favDrinks[1]);
// console.log (favDrinks[2]);
// console.log (favDrinks[3]);
// console.log (favDrinks[4]);

// let multiplesTwo = [];

// for (let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// While Loops
// Example 1
// let age =15;
// while (age<18){
//     console.log("You're a child!");
//     age++

// }

// console.log("You're an adult");
 
// Example 2


// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){

//     console.log(currentCard);
//     currentCard = cards [Math.floor(Math.random()*4)];

// }

// console.log(currentCard);

// Activity 1
// Create an array that lists your favourite films, up to 5 elements

// let favFilms = ["Alice in Wonderland", "Peter Rabbit", "Bing", "Mr Tumble", "Matilda" ]
// console.log (favFilms[0]);
// console.log (favFilms[1]);
// console.log (favFilms[2]);
// console.log (favFilms[3]);
// console.log (favFilms[4]);

// console.log (favFilms)

// // Add to 2 more using .push()

// let count = favFilms.push("Blippy", "Miss Monica")

// console.log(favFilms);

// Use a loop to cycle through the array

// for (let i =2; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// Activity 2
// Generate 6 random numbers between
// 1-50 and log them to the console
// let counter = 1
// let preRand

// let random= Math.floor(Math.random()*50 ) + 1; 

// console.log(random)
// console.log(random)
// console.log(random)
// console.log(random)
// console.log(random)
// console.log(random)

// Activity 3
// If we can create a loop to put 0-9 on the screen, how 
// can we count from 9-0? Create a program that does 
// this

// for (var i=0;i<=9; i++) {
//     console.log(i)
// }

// ****for (var i=9;i>=0; i++) {
//     console.log(i)
// }

// for (var i=9;i>=1;i--) {
//     console.log(i)
// }

// Activity 4

// Displays 4 films stored in an array.

// let fourFilms = [
//     "Baby Jake",
//     "Panda",
//     "Lego"
// ];

// Use a for loop to show each film in the array.

// for(let i = 0; i < fourFilms.length; i++) {

    // console.log(fourFilms[i]);

// }
// Use an if statement to check if the 3rd film in the array is Ghostbusters. 
// If it is, return “Yay it’s Ghostbusters”. 

// if (fourFilms == `Ghostbusters`){
//     console.log("Yay! it's Ghostbusters")
// }

// //  If it isn’t return “Boo! 
// // we want Ghostbusters

// else if (fourFilms !== `Ghostbursters`){
//     console.log(`Boo, we want Ghostbursters`)
// }

// Activity 5:
// Generate a random number between 1 and 30 six times.

// let random= Math.floor(Math.random()*30 ) + 1; {

// For each random number generated, 
// check if this number is divisible by 7 or not.
// Log out a message to the console if it is divisible 
// by 7 or not.

// if (random % 7 == 0){
//     console.log (`Yes, it is divisible`)
// }

// else if (random % 7 !==0 ){
//     console.log (`No, It is not divisible`)
// }
// console.log(random)
// console.log(random)
// console.log(random)
// console.log(random)
// console.log(random)
// console.log(random)



// Activity 6:

// Imagine you’re a programmer for a social media platform! You have 
// been tasked with building a prototype for a mutual followers program. 
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
// In these arrays place 4 names as strings. Make sure there are 2 names 
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the matching follower

let bobsFollowers = ["Barry", "Emmanuel", "Juliet", "Grace"];
let hannahsFollowers = ["Barry", "David", "Juliet", "Anthony"];
let sharedFollowers = [];

    for (let x = 0; x < bobsFollowers.length; x++) {
        for (let y = 0; y < hannahsFollowers.length; y++) {
            if (bobsFollowers[x] == hannahsFollowers[y] ) {
                sharedFollowers.push(bobsFollowers[y]);
            }
        }
    };
    console.log(`The shared followers are ${sharedFollowers}`)


    // Activity 7
// Research on do...while loop, find 
// out about the difference between 
// for loop, while loop and do...while 
// loop. Give an example of each. 
// What are the pros and cons?

// Solution
// do...while statements determines the code block to be executed once, and repeted as long as the condition is true.
// Pro
// It is useful when you need to run a code block at least one time.
//  cons
// If you use a variable in the condition, you must initialize it before the loop and increment it within the loop. Otherwise the loop will never end and this will crash your browser. Also, if the condition is always true the loop will never end which will result in crashing your browser.
