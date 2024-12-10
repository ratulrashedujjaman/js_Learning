// JavaScript Memory

/**
*? Call stack
*! Primitive Datatype
** String, Number, Boolean , Undefined , Null ,Symbol,BigInt 
 */
let fullName = 'Ali Hossain';
let webDeveloper = fullName;
webDeveloper= 'Shuvo';
// console.log(fullName);
// console.log(webDeveloper);


/**
*? Heap
*! Non-Primitive Datatype
** Object, Array 
 */

let student = {
    name:'Ali',
    age :30,
};
let people = student;
// people = {
//     name:'Shuvo',
//     age: 32,
// };
people.name= 'Shuvo';
people.age= 31;

// console.log(student);
// console.log(people);

let car = ['Audi' , 'BMW'];

let newCar =car;
newCar [0]='Toyota';

console.log(car);
console.log(newCar);
