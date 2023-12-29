/*
1. Including JavaScript can be added to an HTML file in two primary ways:
inline scripts and external scripts.

Inline Script:
You can include JavaScript directly within your HTML files using the <script> tag.

html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>Inline Script Example</title>
</head>
<body>
    <script>
        alert("This is an inline script!");
    </script>
</body>
</html>
External Script:
For larger scripts or when the same script is used on multiple pages, you might prefer to keep your JavaScript
in a separate file. This file is then linked to your HTML using the <script> tag with the src attribute.

html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>External Script Example</title>
</head>
<body>
    <script src="path_to_your_script.js"></script>
</body>
</html>
Where path_to_your_script.js is the path to your JavaScript file.

Note: It's often recommended to place scripts just before the closing </body> tag to ensure that the entire DOM is
loaded before the script runs.

2. Console
The browser console is a part of the web developer tools available in most modern browsers. It provides a space where
you can run JavaScript code and see its output. It's also an essential tool for debugging.

How to Access:
Right-click anywhere on a webpage and select Inspect or Inspect Element.
Navigate to the Console tab.
Usage Examples:
Log Messages:

javascript
Copy code
console.log("Hello, World!");
Error Messages: If there's an error in your JS code, it will be displayed in the console with details about the error
type and the line number where it occurred.

Executing JS Code: You can type JavaScript directly into the console and execute it.

Debugging: Use commands like console.warn(), console.error(), and console.table() to display messages in different
formats and styles. You can also set breakpoints in your code from the Sources tab, allowing you to pause execution and
inspect variable values.
 */
