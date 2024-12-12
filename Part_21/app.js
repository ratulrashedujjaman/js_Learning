/*
Global Scope--globally thakbe
Local scope-- { } er vitor thakbe
Block Scope-- if/while er vitor thakbe
Function Scope-- Function er vitor thakbe
*/ 

let car = 'Bently';
console.log(car);

if(true) {
    console.log(car);
    let bike = 'R15';
    console.log(bike);
    if(true) {
        let fish = 'Rui';
        console.log(fish);
    }
}
// console.log(bike);

function firstName(){
    let cycle ='Duronto';
    cycle = 'Hero';
    console.log(cycle);
    console.log(car);
    person = 'Ali Hossain'; /*Amutomatic Global Variable,try to ignore it */ 
    function lastName() {
        let fruits = 'Mango';
        console.log(cycle);
        console.log(fruits);
        console.log(person);
        
    }
    // console.log(fruits);
    lastName();

}
firstName();
    // console.log(cycle);
    // console.log(car);
console.log(person);

let x = 100;
console.log(x);
function main() {
let x = 10;
console.log(x);
}
main();
console.log(x);