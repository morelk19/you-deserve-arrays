const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt(`Enter an array: `));
let bool = false;

if(typeof userArray[0] === 'number'){
   bool = true;
}
console.log(bool);