//----- Events listener --------------//
// ------- Listening to a Click Event

// Select the button element
let button = document.getElementById("myButton");

// Add an event listener to the button
button.addEventListener("click", function() {
    console.log("Button was clicked!");
});
//--------- Listening to a Keyboard Event------>
/*
You can listen for keyboard events like keydown, keyup, or keypress.
 */
// Select the input element
let inputField = document.getElementById("myInput");

// Add an event listener to the input field
inputField.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});
// --------------- Listening to Mouse Movements ------------->

// Select the div element
let divElement = document.getElementById("myDiv");
// Add an event listener to the div
divElement.addEventListener("mousemove", function(event) {
    console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
});
//----------------- Removing Event Listeners --------------->
/* It's also possible to remove event listeners using the removeEventListener method. To use it,
the event handler must be a named function.
 */
function handleClick() {
    alert("Button was clicked!");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
