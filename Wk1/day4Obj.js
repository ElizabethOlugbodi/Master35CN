// Class Activity 1
// Let’s create an object called person with a key 
// called name and set the value to your name.
// Add another key called age.
// Let’s add a list of favourite songs to our 
// person object and log them to the console.

const person = {
    name: "Elizabeth",
    age: "13"
}

// Class Activity 2
// Let’s create an alarm.
// Create a key called weekendAlarm, with a value saying “no 
// alarm needed” and a key called weekdayAlarm, with a value 
// saying “get up at 7am”.
// Create a variable called day and one called alarm.
// If day is Saturday or Sunday, set alarm to weekendAlarm.
// If day is a weekday, set alarm to weekdayAlarm. 

// let alarm = ""
// let day = "Monday"

// const alarm = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"

// }
// if (day == "Saturday" || day == "Sunday"){
//     console.log(alarmClock.weekendAlarm)
// }
// else {
//     console.log(alarmClock.weekdayalarm)
// }


// // Activity 1
// const person = {
//     name: "Babs",
//     age: 35,
//     favouriteSongs: [
//     "Ocean Drive", "Flying without Wings",
//     "Bad Habits",
//     "By your Grace"
//     ],
//     sayHi(){
//         return `Hello my name is ${this.name}`
    
//     }
// }

// console.log(person.sayHi());

//Activity 2
//Create an object called pet with the key values of: name, typeOfPet, age, colour And methods called eat and drink. 
//They should return a string saying [Your Pet Name] is eating/drinking. 


let pet ={
    name:'Smarty',
    typeOfPet:'Dog',
    age:'5 Years',
    colour:'Black and Brown',
    eat:()=>{
        console.log(`${pet.name} is eating`)},
    drink:()=>{
        console.log(`${pet.name} is drinking`)}
};

console.log(pet.eat());
