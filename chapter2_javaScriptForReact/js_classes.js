window.onload = function() {

    // *** CLASSES ***

    // ** Creating Class Declaration in plain JavaScript with Prototypical Inheritance ** 
    // JavaScript uses something called "prototypical inheritance". This 
    // technique can be wielded to create structures that feel object-oriented. 
    // For example, we can create a Vacation constructor that needs to be 
    // invoked with a new operator: 

    // Class Vacation
    function Vacation(destination, length){
        this.destination = destination;
        this.length = length; 
    }    
    Vacation.prototype.print = function() { // note: "prototypical inheritance" example
        console.log(`${this.destination} | ${this.length} days`);
    }
    
    // Creating Object
    const maui = new Vacation("Maui", 7 );

    maui.print(); // note: The maui instance inherits the print method through the prototype.

    // ** Class Declaration in ES2015/ES6 **  
    // Next, ES2015 introduced "class declaration", but the dirty secret is that JavaScript still 
    // works the same way. Functions are objects, and inheritance is handled through 
    // the prototype. Classes provide a syntactic sugar on top of that gnarly proto‐ type syntax:

    // Class Vacation2
    class Vacation2 {
        constructor(destination, length) {
            this.destination = destination;
            this.length = length; 
        }

        print() {
            console.log(`${this.destination} will take ${this.length} days.`);
        }
    }

    // Creating Object
    const trip = new Vacation2("Santiago, Chile", 7 );

    trip.print();

    // ** Extend Class **
    // Classes can also be extended. When a class is extended, the subclass inherits the 
    // properties and methods of the superclass. These properties and methods can be manipulated
    // from here, but as a default, all will be inherited.

    // Vacation2 used as an "abstract class" to create different types of vacations
    class Expedition extends Vacation2 {
        constructor(destination, length, gear){
            super(destination, length);
            this.gear = gear;
        }
        
        print(){
            super.print();
            console.log( `Bring your ${this.gear.join(" and your ")}!`);
        }
    } 

    // Creating Object
    const california = new Expedition("Mt. Whitney", 3, ['sunglasses', 'prayer flag', 'camera']);

    california.print();
    // note: That’s simple inheritance: the subclass inherits the properties of the superclass. By calling 
    // the print method of Vacation, we can append some new content onto what is printed in the print method 
    // of Expedition. Creating a new instance works the exact same way—create a variable and use the new keyword:

    // end of notes
    document.title = "JS Classes";
}