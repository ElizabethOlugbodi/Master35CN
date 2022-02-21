// console.log("All Around the World".toUpperCase());
// console.log("All Around the World"[7].toUpperCase());

// let i = 10;
// i += 2;
// //i=12

// let favouriteDrink="coffee";
// console.log(favouriteDrink);
// console.log("My favourite drink is" + favouriteDrink);

// let name = 'Chris';
// let age = 27;
// let favDrink = 'Coffee'

// console.log("Hi, my name is" +name + ". I am" +age +"and my favourite drink is" +favDrink+".");

// let name = `Chris`;
// let age = 27;
// let favDrink = `Coffee`

// console.log (`Hi, my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// let name=`Chris`
// let age= 28;
// let favDrink=`Tea`

// console.log (`Hi, my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// Activity1 

// let name = "James"
// let age = 69;
// let favColour="Blue";

// console.log("Hi, my name is" +name + ". I am " +age +"and my favourite colour is" +favColour+".");

// let name=`James`
// let age= 69;
// let favColour=`Blue`

// console.log (`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

// let place=`Oldham`
// let street= `Wordsworth`
// let houseNumber= 13;
// let doorColour=`yellow`

// console.log (`Hi, I live in ${place}, ${street} street, house number ${houseNumber} and the colour of my door is ${doorColour}. There is a lovely tree in front of my house.`)


// Activity 2

// let breakfast=`porridge oat`;
// let lunch= `casserol`;
// let dinner=`vegetable salard`

// console.log (`Today I had ${breakfast} in the morning, ${lunch} for lunch and ${dinner} for dinner.`)

// let breakfast=`hard boiled egg`;
// let lunch= `apple`;
// let dinner=`tomatoes soup`

// console.log (`But tomorrow I will be having something lighter ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner. I hope that helps me to saty healthy.`)


// Activity 3
// let d = new Date()
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toTimeString())

// let d1 = new Date(`19/09/1979`);
// let d2 = new Date(`15/02/2022`);
// console.log(d.toDateString())

// var prevDate = new Date("Sep.19, 1979");
// console.log(prevDate.toDateString())

// var orgiDate = new Date("Feb.15, 2022");
// console.log(orgiDate.toDateString())

 // Activity 3

var start = new Date("September 19, 1979");
    end = new Date();
    diff = 0;
    days = 1000 * 60 * 60 * 24;
diff = end - start;
console.log(Math.floor(diff / days))
