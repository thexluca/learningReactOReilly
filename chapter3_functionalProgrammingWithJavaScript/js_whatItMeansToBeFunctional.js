window.onload = function() {
    
    // *** WHAT IT MEANS TO BE FUNCTIONAL *** 

    // We can say that JavaScript supports functional programming because 
    // its functions are first class citizens. This means that functions are data.
    // They can be saved, retrieved, or flown through your application just like variables.

    //  JavaScript functions are first-class citizens. This means that
    // functions can do the same thing that variables can do.
    
    // You may have noticed that you can declare functions with the var,
    // let or const keywords the same way you can declare strings, numbers,
    // or any other variables: 
    var log1 = function(message) {
        console.log(message);
    }
    log1("In JavaScript, functions are variables");

    // Since functions are variables, we can add them to objects:
    const obj = {
        message: "They can be added to objects like variables",
        log2(message) {
            console.log(message);
        }
    }

    obj.log2(obj.message);

    // We can also add functions to arrays in JavaScript:
    const messages = [
        "They can be insterted into arrays",
        message => console.log(message),
        "like variables",
        message => console.log(message)
    ];

    messages[1](messages[0]);
    messages[3](messages[2]);

    // Functions can be sent to other functions as arguments, just like other variables:
    const insideFn = logger => {
        logger("They can be sent to other functions as arguments");
    }

    insideFn(message => console.log(message));

    // They can also be returned from other functions, just like variables:
    const createScream = function(logger) { 
        // note: technically this is the scream() function right here being returned
        return function(message) {
            logger(message.toUpperCase() + "!!!");
        };
    };

    const scream = createScream(message => console.log(message));

    scream("functions can be returned from other functions");
    scream("createScream returns a function");
    scream("scream invokes that returned function");
    
    // ** HIGHER-ORDER FUNCTIONS ** 
    // The last two examples are "higher-order functions": functions that 
    // either take or return other functions.
    // If you see more than one arrow used during a function declaration, this means 
    // that you're using a higher-order function. 
    // createScream Arrow function re-write (notice two arrows):
    const createScreamArrowFn = logger => message => {
        logger(message.toUpperCase() + "!!!");
    }; 

    const scream2 = createScreamArrowFn(message => console.log(message));
    scream2("re-written with arrow functions");

    // - - - - - end of noted - - - - - 
    document.title = "What It Means to Be Functional"
}