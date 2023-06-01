window.onload = function() {
   
    // *** Functions ***

    // Anytime you want to create a repeatable task with JavaScript,
    // you can use a function. 

    // * Function Declaration 
    function logGreeting(firstName) {
        console.log(`Hello, ${firstName}!`);
    }
    // Invoke function 
    logGreeting('Julia');

    // * Function Expression
    const logCompliment = function(firstName) {
        console.log(`You're doing great, ${firstName}!`);
    }
    logCompliment('Julia');
    // note: Function Expressions are NOT hoisted. You will get a TypeError. 

    // * Default Parameters
    // Default parameters are included in the ES6 spec, so in the event that 
    // a value is not provided for the argument, the default value will be used.
    function logActivity1(name = "Julia Roberts", activity = "soccer") {
        return `${name} loves ${activity}`;
    }
    console.log(logActivity1());

    // Default parameters/arguments can be any type, not just string. 
    const defaultPerson = {
        name: { 
            first : "Julia",
            last : "Roberts"
        },
        favActivity: "soccer"
    }

    function logActivity2(person = defaultPerson) {
        return `${person.name.first} loves ${person.favActivity}`;
    }
    console.log(logActivity2());

    // * Arrow Function
    const lordify = firstName => `${firstName} of Canterbury`;
    console.log(lordify("Julia Roberts"));
    // note: If the function body required more than one line of 
    // code, { } are required around the function body. We also remove 'return' because
    // the arrow points to what should be returned. Parentheses are not required around single arguments/parameter.
    
    // * Arrow Functions Scope 
    // Arrow functions do NOT block off the scope of 'this'. 
    const tahoe = {
        mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
        print: function(delay = 1000){
            setTimeout(() => {
                console.log(this.mountains.join(", "));
            }, delay);
        } 
    };
    tahoe.print(); // Freel, Rose, Tallac, Rubicon, Silver
    // "print" property uses a function expression(blocking outside scopes). 
    // Therefore 'this' can only point to its object, tahoe. 
    // Inside "print", setTimeout() uses a arrow function(NOT blocking outside scope) allowing outside scope of 'this' to be its parent function scope, referring to the object, tahoe.
    // If setTimeout() was a function expression, all scopes would be blocked, 'this' would just point to window. 

    // ** Return Objects 
    const person = (firstName, lastName) => ({
        first: firstName,
        last: lastName
    });
    console.log(person('Flad', 'Hanson'));
    // note: To return objects, wrap the returned object with parentheses. 

    // *** Interesting Functions ***
    // * Function Shorthand Methods
    const fruits = {  
        items: [],
        add(...items) {
            this.items.push(...items);
        },
        get(index) {
            return this.items[index];
        }
    };
    fruits.add('mango', 'banana', 'guava'); // The 'spread operator' will handle the multiple args  
    console.log( fruits.get(1) ); // banana

    // * Generator Functioin
    // Generators are functions that can be exited and later re-entered. Their 
    // context (variable bindings) will be saved across re-entrances.
    function* generatorFunction() {
        yield 'Hello, ';
        console.log('I will be printed after the pause');
        yield 'World, ';
    }
    const generatorObject = generatorFunction();
    console.log( generatorObject.next().value ); // Hello, 
    console.log( generatorObject.next().value ); // I will be printed after the pause World,
    console.log( generatorObject.next().value ); // undefined


    // - - - end of notes - - -
    document.title = 'JS Function Notes';
}