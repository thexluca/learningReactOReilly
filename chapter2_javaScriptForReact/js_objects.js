window.onload = function() {
    
    // Creating objects using objects literal syntax

    const person1 = {
        firstName: 'testFirstName',
        lastName: 'testLastName'
    } 

    console.log( person1.firstName );

    // Creating objects using the 'new' keyword

    // a) Using the 'new' keyword with in-built Object constructor function
    const person2 = new Object();

    person2.firstName = 'testFirstName';
    person2.lastName = 'testLastName';

    console.log( person2.firstName );

    // b) Using 'new' with user defined constructor function 
    function Person3(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }

    const personOne = new Person3('testFirstNameOne', 'testLastNameOne');
    const personTwo = new Person3('testFirstNameTwo', 'testLastNameTwo');

    console.log( personTwo.firstName);

    // Using Object.create() to create new objects

    // - - - end of notes - - -
    document.title = 'JS Object Notes';
    
}