window.onload = function() {

    // *** Spread Operator *** 

    // The spread operator is three dots (...)
    // that perform several tasks. 

    // ** First, the spread operator allows us to combine the contents of arrays. 
    const peaks = ["Tallac", "Ralston", "Rose"];
    const canyons = ["Ward", "Blackwood"];
    const tahoe = [...peaks, ...canyons];
    console.log( tahoe );

    // ** Suppose we wanted to grab the last item from the array. 
    // We can use the "Spread" operator to copy the array than 
    // reverse the copy and use destructuring to grab the item. 
    const [last] = [...peaks].reverse();
    console.log(last);

    // ** The spread operator can also be used to get the remaining items in the array. 
    const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
    const [first, ...others] = lakes;

    console.log(others.join(", "));

    // ** Rest Parameters, we can also use the three-dots syntax to collect function
    // arguments as an array. 
    function directions(...args) {
        let [start, ... remaining] = args;
        let [finish, ...stops] = remaining.reverse();

        console.log(`drive through ${args.length} towns`);
        console.log(`start in ${start}`);
        console.log(`the destination is ${finish}`);
        console.log(`stopping ${stops.length} times in between`);
    }
    directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

    // ** Spread operator can also be used for Objects.
    const morning = {
        breakfast: "oatmeal",
        lunch: "peanut butter and jelly"
    }
    const dinner = "mac and cheese";

    const backpackingMeals = {
        ...morning, // we used he spread operator to get the object keys
        dinner
    }
    console.log(backpackingMeals);    

    // - - - - - end of notes - - - - - 
    document.title = "JS Spread Operator";
}