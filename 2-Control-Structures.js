//--------- Conditional Statements: Using if, else if, and else to control the flow of a program.--->

let age = 18;

if (age >= 21) {
    console.log("You are allowed to drink!");
} else if (age < 21 && age >= 18) {
    console.log("You are an adult but not allowed to drink!");
} else {
    console.log("You are underage!");
}

//-------- Loops: for, while, and do...while for repeated execution of code ---------->

// for loop ( Use for loop if we know how many times the loop will run)
for (let i = 0; i < 5; i++) {
    console.log("This is loop number " + i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}

// do...while loop
let value = 0;
do {
    console.log("Value is: " + value);
    value++;
} while (value < 2);

//-- Switch Statement: A type of conditional statement used when
// there are multiple conditions to be checked-->

let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    default:
        console.log("It's some other day.");
        break;
}
