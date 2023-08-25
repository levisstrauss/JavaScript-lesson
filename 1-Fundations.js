

// Exercise 1

var petDog = 'Rex';
var petCat = 'Pepper';

console.log(petDog)
console.log(petCat)

console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is: " + petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)

catSound = "meow"

console.log(petCat, "now says", catSound)


//================ Operators ====================


/*
    Data types: String, Numbers, null, undefined
        Logical operator: 
    && both must be true 
    || only one must be true
    ! Not 
    > greater than
    < less than
    === equal
    = Assignment operator
    100 == "100" True
    100 === "100" return False
*/


var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
console.log(10 > 9 && 10 < 17);

console.log(true && true);

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

var currentTime = 7;
console.log(true || false);


var petHungry = true;
petHungry = !petHungry;

console.log(22 % 5); // 2

// Exercise 2: Logical Operator

var score = 8;
console.log("Mid-level skills:", (score > 0 && score < 10));

//Test

var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", (timeRemaining == 0 || energy == 0));

// Test
var num1 = 2;
var num2 = 5;
var test1 =  num1 % 2;
var test2 =  num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

//Test 
var now = "Now in ";
var three = 3;
var d = "D!";

console.log(now + three + d);

// Test


var counter = 0;
counter += 5;
counter += 3;
console.log(counter);

console.log("Hello"+ 5)

var i = 7;
i += 1;
i += 2

console.log(i);



//================ Conditionals and loops ====================

// The switch stament can be used to repalce a complicate switch statement 
var result = 30;
if(result > 40){
    console.log("You have passed the test");
} else {
    console.log("You did not pass the test");
}

var results = 40;

switch(results){
    case 30:
        console.log("Hello");
        break;
    case 40:
        console.log("Mama");
        break;
    default:
        console.log("i don't know");     
}

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}

//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }

 // Exercise 3

 var age = 10;

 if (age >= 65) {
     console.log("You get your income from your pension");
 } else if (age < 65 && age >= 18) {
     console.log("Each month you get a salary");
 } else if (age < 18) {
     console.log("You get an allowance");
 } else {
     console.log("The value of the age variable is not numerical");
 }




 var day = "Sunday";

switch(day) {
    case 'Monday':
        console.log('Hit the gym');
        break;
    case 'Tuesday':
        console.log('Attend a workshop');
        break;
    case 'Wednesday':
        console.log('Go for a hike');
        break;
    case 'Thursday':
        console.log('Read a book');
        break;
    case 'Friday':
        console.log('Watch a movie');
        break;
    case 'Saturday':
        console.log('Meet friends');
        break;
    case 'Sunday':
        console.log('Rest and relax');
        break;
    default:
        console.log('There is no such day');
}

// For loop, while and nested loop

for(var i = 0; i<4; i++){
    console.log(i);
}


var i = 1;

while(i< 4){
    console.log(i);
    i = i+1;
}