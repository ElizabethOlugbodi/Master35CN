// if (1==="1") console.log{(true);}

// let place = "Manc";
// let weather = "Cloudy";
// if (place == "Manc" && weather == "Sunny") {console.log("Check again");}

// const grade = 87;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >=50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// }

// Afternoon Activities.
//  Activity 1

// let age = 18

//     if (age > 17){
//         console.log("Yes I can serve you");
//         }
//     else{
//         console.log("You aren’t old enough");
//         }
        
        
// Add variable called country

// if age > 17 and country == "UK"
        
//  let country = "UK"
//  let age = 17
        
// if (age > 17 && country == "UK"){
//     console.log("Yes I can serve you");
//         }
// else{
//     console.log("You aren't old enough");
        // }

// Activity 2
// Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” 
// If you don’t mind having Pepperoni for example log to the console 
// “I don’t mind having ${topping} on my pizza. 
// Finally, for any topping you don’t like log “${topping} 
// should not be on a pizza.”

// let pizzaTopping = `pepperoni`;

// switch(true){
//     case pizzaTopping = `pepperoni`:
//         console.log(`These are important ingredients for my pizza.`);
//         break;
//     case pizzaTopping = `ham`:
//         console.log(`I don't mind having ${pizzaTopping} on my pizza.`);
//         break;
//     case pizzaTopping = `chicken`:
//         console.log(`${pizzaTopping} should not be on a pizza.`);
//         break;
//     default:
//         console.log(`I do not want this on my pizza.`);
// }


// Activity 3
// Create a variable called password. 
// Check how many letters are in the password, if there are 
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console.

// let password = 'Admin54321';
// let counter = password.length;

// if (counter>= 8){
//     console.log('Password accepted')
// }
// else {
//     console.log('Password declined, minimum of 8 characters.')
// }

// let password = '54321';
// let counter = password.length;

// if (counter>= 8){
//     console.log('Password accepted')
// }
// else {
//     console.log('Password declined, minimum of 8 characters.')
// }

// // Activity 4
// // Create a variable called num. 
// // Check if the variable is divisible by 3 or 5. If it 
// // is, log “This number is divisible by 3 or 5”. 
// // Otherwise log something else. 

// let num = 30

// switch(true){
//     case num % 3 ==0 || num % 5 ==0:
//         console.log('This number is divisible by 3 or 5!')
//         break;
//     default:
//         console.log('This number is not divisible by 3 or 5!')
// }
 
// let num = 7

// switch(true){
//     case num % 3 ==0 || num % 5 ==0:
//         console.log('This number is divisible by 3 or 5!')
//         break;
//     default:
//         console.log('This number is not divisible by 3 or 5!')
// }
 
// Activity 5
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
// “fizz buzz” to the console. Otherwise log num to the console

// let num = 15

// switch(true){
//     case num % 3 ==0 && num % 5 ==0:
//         console.log('fizz buzz')
//         break;

//     case num % 3 ==0:
//         console.log(`fizz`)
//         break;
    
//     case num % 5 ==0:
//         console.log(`buzz`)
//         break;

//     default:
//         console.log('Number not divisible by 3 or 5')
// }

// Activity 6
// Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202).

// function palindrome(str) {
//     var reversed = str.split("").reverse().join("");
//     console. log(reversed)
// }

// palindrome("20202");

// // function palindrome(str) {
// //     var reversed = str.split("").reverse().join("");
// //     console. log(reversed)
// // }

// // palindrome("Hannah");


// Activity 7
// Create a variable called time, a variable called placeOfWork 
// and a variable called townOfHome. Create an if statement that 
// logs to the console where someone is at times of the day. E.g. if 
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// let time = 7
// let placeOfWork = `Manchester`
// let townOfHome = `Leeds`

// switch(true){
//     case time == 7 && townOfHome == `Leeds`:
//         console. log (`I'm at home`)
//         break;

//     case time == 8 && placeOfWork == `Manchester`:
//         console. log (`I'm commuting`)
//         break;
    
//     case time == 9 && placeOfWork == `Manchester`:
//         console. log(`I'm at work`)
//         break;
    
//     default:
//         console.log(`Location undetected`)
// }

// Activity 8

// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// index of a last vowel in the string.

// let letters = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`;

// console. log(letters.indexOf(`i`));

// Activity 9

// Create a variable called word that takes a string. Create 
// an if statement that checks if the last letter is the same as 
// the first. If it is return true, otherwise return false.

// let word = `Neon` 
// let firstLetter = `N`
// let lastLetter = `n`

// switch(true){
//     case firstLetter == `N` && lastLetter == `n`:
//         console .log (`True`)
//         break;

// default: console.log(`False`)

// }

// let word = `Neon` 
// let firstLetter = `N`
// let lastLetter = `n`

// switch(true){
//     case firstLetter == `N` && lastLetter == `e`:
//         console .log (`True`)
//         break;

// default: console.log(`False`)

// // Activity 9
// let word = "Neon";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// }

// Activity 10

// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together.


let num1= 9
let num2= 2
let sum = num1 + num2 
let pro = num1 * num2

if (num1 + num2 % 2 == 4.5) {
        console.log(`${sum} is the sum of the numbers`)
}
    else{
        console.log(`You will have ${pro} when you multiply the numbers`)
            
}
