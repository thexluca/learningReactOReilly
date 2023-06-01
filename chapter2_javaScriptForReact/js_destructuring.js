window.onload = function() {

    // *** Destructuring ***

    // * Destructuring Objects 
    const sandwich = {
        bread: "dutch crunch",
        meat: "tuna",
        cheese: "swiss",
        topping: ['lettuce', 'tomatoes', 'mustard']
    };

    let { bread, meat } = sandwich;
    console.log(`${bread} and ${meat}`);
    // destructuring other objects
    // let scrollY = window.scrollY can be written as the example below with destructuring. 
    let {scrollY} = window; 
    console.log(scrollY);

    // * Destructuring object function arguments. 
    // Instead of using dot notation syntax to dig into objects, we can 
    // destructure the value we need out of an object. 
    // ex.
    const lordify = ( {firstname} ) => {
        console.log(`${firstname} of Canterbury`);
    };
    const regularPerson = {
        firstname: 'Bill',
        lastname: 'Wilson'
    };
    lordify(regularPerson); // Bill of Canterbury

    // Further, destructuring object with a nested object 
    // ex.
    const lordifySpouse = ( {spouse: {firstname}} ) => {
        console.log(`${firstname} of Canterbury`);
    };
    const regularPersonSpouse = {
        firstname: 'Bill',
        lastname: 'Wilson',
        spouse: {
            firstname: 'Andrea',
            lastname: 'Wilson'
        }
    };
    lordifySpouse(regularPersonSpouse); // Andrea of Canterbury

    // * Destructuring Arrays
    const animals = ['horse', 'mouse', 'cat'];
    const [firstAnimal] = animals;
    console.log(firstAnimal); // horse
    const [, , thirdAnimal] = animals;
    console.log(thirdAnimal); // cat
    
    
    // - - - end of notes - - -
    document.title = "JS Destructuring Notes"
}