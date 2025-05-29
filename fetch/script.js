//fetch makes a request for us, then reutrns a promise
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// build your own request to fakestorepai.com or jsonplaceholder.typicode.com
// display the response in the console
// be prepared to discuss the types of objects, the datatypes,
//  and the structure of the response