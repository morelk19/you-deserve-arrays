const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt(`Enter an array: `));

if (userArray.length < 3){
    console.log(`Error array is not long enough.`);
}else if(typeof userArray[2] !== 'string'){
    console.log(`Error third item is not a string.`);
}else{
    console.log(userArray[2][1]);
}