function myFunction(fullName,age,dateofBirth=1991) {
    console.log('Hello ' + fullName +' i am '+ age +' years old '+'my date of birth is '+dateofBirth);
}
myFunction('ALi',25,1994);
myFunction('Shuvo',30);

function isSubscribed(){
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);

(function(message){
    console.log('i am self invokeing function',message);
})('Hello');

let maths = function (x,y){
    console.log('testing im working or not');
    return x*y;
    
};
console.log(maths(3,4));
console.log(maths(5,4));
console.log(maths(6,4));

function newFunc(){
    let firstName = 'Ali';
    console.log(firstName);
}
// console.log(firstName);
newFunc();

function newFuncs(){
    let firstName = 'Ali';
    console.log(firstName);
}
// console.log(firstName);
newFuncs();

let numbers = [4,5,6,7];
let sqNumbers = numbers.map(function (number) {
    return number*number;
});
console.log(sqNumbers);

// let add = function (x,y){
//     return x+y;
// }
// console.log(add(5,6));

let add = (x,y) => x+y;
console.log(add(5,6));

function greet(firstName){
    function sayHello(){
        alert('hello '+firstName);
    }
    return sayHello();
}
greet('Shuvo');