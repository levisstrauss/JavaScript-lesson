//------------------- Selection by id ----------------------------->
let heading = document.getElementById("para");
heading.style.color = "blue";
console.log(heading.textContent);  // Prints the text of the h1 element


//----------------- Selection using selector ----------------------->
if (typeof document !== 'undefined') {
    let firstParagraph = document.querySelector("p");
    firstParagraph.style.color = "red";
    console.log(firstParagraph.textContent);  // Prints the text of the first p element
}

//----------------- Modifying elements ------------------------------>
let heading = document.getElementById("myHeading");
heading.textContent = "New Heading Text";  // Changes the text of the h1 element

//----------------= Changing Attributes -------------------------->

let link = document.querySelector("a");
link.href = "https://www.example.com";  // Changes the href attribute of the first a element

// --------------- Changing Style -------------------------------------->
let paragraph = document.querySelector("p");
paragraph.style.color = "red";  // Changes the text color of the first p element


