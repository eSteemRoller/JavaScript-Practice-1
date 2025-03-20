
// The fetch() function is a Promise-based mechanism for programmatically making web requests in the browser.
// The fetch() function is a built-in JavaScript function that allows you to make network requests similar to XMLHttpRequest (XHR).
// The fetch() function takes one mandatory argument, the path to the resource you want to fetch.
// The fetch() function returns a Promise object.
// This Promise object represents the completion or failure of the request.
// The Promise object is in one of three states: 
// pending, fulfilled, or rejected.

// The primary methods for handling a Promise object are then(), catch(), and finally().
// The then() method is called when the Promise is resolved.
// The catch() method is called when the Promise is rejected.
// The finally() method is called when the Promise is settled, whether it is fulfilled or rejected.

// Our recommended method for handling a Promise object is to use the async/await syntax.
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
// The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment.
// The await keyword is only valid inside async functions.
// The await keyword waits for the Promise to be settled, and then returns the result.
// If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.


fetch(`https://jsonplaceholder.typicode.com/users/1`).then(() => {

  });

