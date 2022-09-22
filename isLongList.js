const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt(`Enter an array: `));
let bool = false;

if(userArray.length >= 10){
   bool = true;
}
console.log(bool);