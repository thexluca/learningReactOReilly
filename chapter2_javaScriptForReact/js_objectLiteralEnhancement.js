window.onload = function() {

    // *** Object Literal Enhancement ***
     
    // With Object Literal Enhancement, we can grab variables from the global scope 
    // and add them to an object.

    const name = "Tallac";
    const elevation = 9738;
    const print = function() {
        console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
    }

    const funHike = { name, elevation, print};

    funHike.print(); 
    // note: name, elevation and print are now keys in the funHike object. 
    // notice print is a function, we use this. to access object keys.

    // ** When defining object methods, it is no longer necessary 
    // to use the 'function' keyword. 
    var skier = {
        name: 'John',
        sound: 'Whoo-hoo',
        powderYell() {
            let yell = this.sound.toUpperCase();
            console.log(`${yell} ${yell} ${yell}!!!`);
        },
        speed(mph) {
            this.speed = mph;
            console.log("speed:", mph);
        }
    };
    skier.powderYell();

    // - - - end of notes - - -
    document.title = "JS Object Literal Enhancement"
}