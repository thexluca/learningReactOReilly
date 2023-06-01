window.onload = function() {
    
    // *** Template Strings *** 
    
    // This is referred to as template strings, template 
    // literals, or string templates interchangeably.
    // Any JavaScript that returns a value can be added to a 
    // template string between the ${ } in a template string. 

    // example data. 
    const firstName = 'Julia';
    const lastName = 'Roberts';
    const middleName = '';
    const qty = Math.floor(Math.random() * (10 - 1) + 1); // Generates random number (min)-(max)
    const price = Math.floor(Math.random() * (100 - 50) + 50); // Generates random number (min)-(max)
    const topic = 'JavaScript';
    
    // Traditional string concatination
    console.log( "Hello! " + lastName + ", " + firstName + " " + middleName );
    
    // * Template String/Template Literals
    console.log(`Hello! ${lastName}, ${firstName} ${middleName}`);
    
    // Tempate string honor "whitespace", making it easy 
    // to draft email templates. 
    const email = ` 
    Hello ${firstName},
    
    Thanks for ordering ${qty} tickets to ${topic}.
    
    Order Details:
    ${firstName} ${middleName} ${lastName}
    ${qty} x $${price} = $${qty*price} to ${topic}
    
    You can pick  your tickets up 30 minutes before the show. 
    
    Thanks!
    `;
    console.log(email);
    
    // Now that 'whitespace' is recognized as text, you can insert 
    // formatted HTML that is easy to read and understand. 
    document.body.innerHTML = `
    <section id="email">
        <p id="emailAddress"> To: ${firstName}.${lastName}@email.com </p>
        <p id="emailBody"> ${email} </p>
    </section>
    `;

    // - - - end of notes - - -
    document.title = 'JS Template String Notes';
}