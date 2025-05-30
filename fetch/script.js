//fetch makes a request for us, then reutrns a promise
async function fetchProducts(){
    await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// build your own request to fakestorepai.com or jsonplaceholder.typicode.com
// display the response in the console
// be prepared to discuss the types of objects, the datatypes,
// and the structure of the response

async function fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(body => console.log(body))
    .catch(error => console.error('Error:', error));
}

async function get404() {
    await fetch('https://reqres.in/api/unknown/23', {
        method: 'GET',
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })
    .then( response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


// async and await are used to handle asynchronous operations in JavaScript.
// async functions always return a promise
// await is used to wait for a promise to resolve before continuing execution
async function main() {
    
// any method that uses 'await' must be declared as 'async'
// async and await can be used to prevent race conditons, where two operations are "racing" to complete.

    console.log('Starting intended 404');
    startTimer();
    await get404();
    stopTimer();

    console.log('Starting get posts');
    startTimer();
    await fetchPosts();
    stopTimer();

    console.log('Starting fetch products');
    startTimer();
    await fetchProducts();
    stopTimer();

    console.log('finish');
}

let counter = 0;
main();

// Try multiple requests, to different servers 
// try different endpoints within the same server
// try different servers

function startTimer(){
    timer = setInterval(function() {
        counter ++;
    },
    10);
}

function stopTimer(){
    clearInterval(timer);
    console.log('Timer: ' + counter);
}
// consider implementing a timer for each request

// build a function that will take a long time to run.
// use async and await to run it in the background

// Pay attention to:
// JSON .stringify(<name>) and .parse(<name>) to convert between JSON and JavaScript objects
// async and await
// fetch API - use other other HTTP request methods like POST, PUT, DELETE
// remember the HTTP message stucture : Head and Body
// remember the HTTP status codes