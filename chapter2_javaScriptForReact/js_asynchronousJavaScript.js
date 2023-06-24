window.onload = function() {

    // *** ASYNCHRONOUS JAVASCRIPT *** 

    // With the modern web, we need to perform asynchronous tasks. These 
    // tasks often have to wait for some work to finish before they 
    // can be completed. We might need to access a database. We might 
    // need to stream video or audio content. We might need to fetch 
    // data from an API. With JavaScript, asynchronous tasks do not 
    // block the main thread. JavaScript is free to do something else 
    // while we wait for the API to return data. JavaScript has evolved 
    // a lot over the past few years to make handling these asyn‐ chronous 
    // actions easier. Let’s explore some of the features that make this possible.

    
    // ** SIMPLE PROMISES WITH FETCH() **
    // Promises give us a way to make sense out of asynchronous behavior 
    // in JavaScript. The promise is an object that represents whether the 
    // async operation is pending, has been completed, or has failed.
    console.log(fetch("https://api.randomuser.me/?nat=US&results=1")); // logs a pendig promise
    // * Success * 
    // The pending promise represents a state before the data has been 
    // fetched. We need to chain on a function called .then(). The 
    // then method will invoke the callback function once the promise 
    // has resolved. Whatever you return from this function becomes the 
    // argument of the next then function. So we can chain together then 
    // functions to handle a promise that has been successfully resolved:
    fetch("https://api.randomuser.me/?nat=US&results=5")
        .then( res =>  res.json() )
        .then( json => console.log(json.results) );
    // * Error *
    // There is a catch function that invokes a callback if the fetch 
    // did NOT resolve successfully. Any error that occurred while fetching 
    // data from randomuser.me will be based on that callback.
    fetch("https://api.randomuser.me/?nat=US&results=10")
        .then( res =>  res.json() )
        .then( json => console.log( json.results ) )
        .catch(console.error); // handles errors
    
    // ** ASYNC/AWAIT **
    // Async functions can contain zero or more await expressions. Await 
    // expressions make promise-returning functions behave as though 
    // they're synchronous by suspending execution until the returned 
    // promise is fulfilled or rejected.
    // * Success *
    // The await keyword is used before promise calls. This 
    // tells the function to wait for the promise to resolve.
    const getFakePerson = async () => {
        let res = await fetch("https://api.randomuser.me/?nat=US&results=10"); 
        let { results } = await res.json();
        // note: A async function aways returns a 
        // promise, res.json() aswell. You need to 
        // await res.json() promise to resolve or 
        // else will return undefined. 
        console.log(results);
    };
    getFakePerson();
    // * Error *
    // When using async and await, you need to surround your promise call in a try block
    // ...catch block to handle any errors that may occur due to an unresolved promise.
    const getFakePerson2 = async () => {
        try {
            let res = await fetch("https://api.randomuser.me/?nat=US&results=5");
            let { results } = await res.json();
            console.log( results );
        } catch (error) {
            console.error(error);
        }
    };
    getFakePerson2();

    // ** Building Promises ** 
    const getPeople = (count) => {
        new Promise((resolves, rejects) => {
            const api = `https://api.randomuser.me/?nat=US&results=${count}`;
            const request = new XMLHttpRequest();
            request.open("GET", api);
            request.onload = () => 
                ( request.status === 200 )
                ? resolves(JSON.parse(request.response).results)
                : reject(Error(request.statusText)); 
            request.onerror = err => rejects(err);
            request.send();
        });
    }
    getPeople(5)
        .then(members => console.log(members))
        .catch(error => console.error(`getPeople failed: ${error.message}`));




    // - - - end of notes - - - 
    document.title = "Asynchronous JavaScript";
}