
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


// const emailRef = document.querySelector(`.email`);
// console.log(emailRef);

// // The ".then()" Promise method (long syntax)
// fetch(`https://jsonplaceholder.typicode.com/users/1`).then(response1a => {
//   response1a.json().then(userDetails => {
//   // console.log(userDetails);
//   emailRef.innerHTML = userDetails.email;
//   });
// });

// // The ".then()" Promise method (short syntax)
// fetch(`https://jsonplaceholder.typicode.com/users/1`).then(response1b => {
//   return response1b.json();
// })
// .then(userDetails => {
//   console.log(userDetails);
// });

// // The "async/await" Promise method
// async function main() {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
//   const data = await response.json();
//   console.log(data);
//   emailRef.innerHTML = data.email;
// }

// main();

// // The "async/await" Promise method with error handling
// async function main() {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
//     const data = await response.json()
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   }
//     catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// main();

// // The "async/await" Promise method with error handling and finally block
// async function main() {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
//     const data = await response.json()
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   }
//   catch (error) {
//     console.error(`Error: ${error}`);
//   }
//   finally {
//     console.log(`Finally block executed.`);
//   }
// }

// main();

// const emailRef = document.querySelector(`.email`);

// Create a promise

// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         resolve(`VIP`);
//     });
// }

// // 2 ways to console.log the promise data (already resolved; already front-loaded)

// // 1. Using the `async/await` method
// async function main() {
// console.log(await getSubscriptionStatus());
// }

// // 2. Using the `.then()` method
// getSubscriptionStatus().then(response => console.log(response));

// main();


// Using the final resolved promise data with HTML
// (Mock API for Exercise 1)

// const statusRef = document.querySelector(`.status`);

// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//     resolve(`VIP`);
//     });
// }

// // 1. Using the `async/await` method
// async function main() {
//     // console.log(await getSubscriptionStatus());
//     const subStatus = (await getSubscriptionStatus());
//     subStatusRef.innerHTML = subStatus;
// }

// // 2. Using the `.then()` method
// getSubscriptionStatus().then(response => console.log(response));

// main();

// Promise (Exercise 1)

const statusRef = document.querySelector(`.status`);

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
    resolve(`VIP`);
    });
}


function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === `VIP`) {
            resolve(`show video`);
        }
        else if (subscriptionStatus === `FREE`) {
            resolve(`show trailer`);
        }
        else {
            reject(`no video`);
        }
    });
}

async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
        console.log(await getVideo(status));
    }
    catch (error) {
        console.error(`Error: ${error}`);
        console.log(`Please, sign in.`);
    }
}

main();