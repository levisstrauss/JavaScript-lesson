//------ CommonJS (CJS) --------------------->
// Exporting
module.exports = someFunction;
// Importing
const someFunction = require('./someFunction');
//------ Asynchronous Module Definition (AMD) --------------------->
// Define a module
define(['dependency1', 'dependency2'], function(dep1, dep2) {
    return someFunction;
});
// Require a module
require(['module'], function(module) {
    // Use the module here
});
//------ Universal Module Definition (UMD) --------------------->
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['dependency1'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js/CommonJS
        module.exports = factory(require('dependency1'));
    } else {
        // Browser global variable
        root.returnedModule = factory(root.dependency1);
    }
}(this, function(dependency1) {
    return someFunction;
}));

//------ ES6 Modules (ESM) --------------------->
// Exporting
export const someFunction = () => {};
export default someFunction;

// Importing
import { someFunction } from './module';
import * as allExports from './module';
import someFunction from './module'; // if using default export
