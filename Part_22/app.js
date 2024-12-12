/**
 * JavaScript Hoisting
 * Variable Hoisting
 * Function Hoisting
 * var hoisting hoy
 * let/const hoisting hoy na
 */
// person = 'Ali Hossain';
// console.log(typeof person);


//Declaration
var x;

//Initialisation
x = 10;


//Usage
console.log(x);


// let y = 20;
// console.log(y);

z = 30;
console.log(z );

/*
let game;
console.log(game);

game = 'Cricket';
console.log(game);
*/


// let game;

 const game = 'Cricket';
console.log(game);

/**
 * JavaScript Function Hoisting
*/

car('R15');
function car(bike) {
    console.log(`I Love to have a ${bike}`);
};
car('R15');

// student('Ali');
let student = function(fname) {
    console.log(`My name is ${fname}`);
};
student('Ali');

