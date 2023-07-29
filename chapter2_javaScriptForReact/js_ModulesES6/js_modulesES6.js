
// *** ES6 MODULES *** 

// A JavaScript module is a piece of reusable code that can easily be incorporated 
// into other JavaScript files without causing variable collisions. JavaScript 
// modules are stored in separate files, one file per module. There are two options 
// when creating and exporting a module: you can export multiple JavaScript objects 
// from a single module or one JavaScript object per module.

// ** "export" Example ** 
// In text-helpers.js, two functions are exported:
import { print, log } from "./text-helpers"; // note: look at text-helpers.js

// ** "export default" Example ** 
// "export default" -  can be used in place of "export" when you wish to export ONLY ONE type. 
// Modules can also export a single main variable. In these cases, you can use 
// export default. For example, the mt-freel.js file can export a specific expedition:
import freel from "./mt-freel"; // note: look at mt-freel.js

// "export" and "export default" can be used on any JavaScript type: primitives, objects, arrays, and functions.

print("printing a message");
log("logging a message");
freel.print();


// note: You can scope module variables locally under different variable names:
import { print as p, log as l } from "./text-helpers"; 
p("printing a message");
l("logging a message");

// note: You can also import everything into a single variable using *:
import * as fns from './text-helpers';

// note: This import and export syntax is not yet fully supported by all browsers or by Node. 
// However, like any emerging JavaScript syntax, it’s supported by Babel. This means you can 
// use these statements in your source code and Babel will know where to find the modules you 
// want to include in your compiled JavaScript.

// - - - - - end of notes - - - - - 