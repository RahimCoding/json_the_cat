const request = require('request');
let breedName = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  if (response) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log('Failed to find breed:' + process.argv[2]);
  }
});

