// JavaScript Date
const myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());  /*  for node */
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleString('default',{
//     weekday: 'long',
// }));


// let updateDate = new Date(2024,5,3);
// let updateDate = new Date(2024,5,3,11,25,0);

let updateDate = new Date('01-15-2002');
// console.log(updateDate);

let myTime = Date.now();

// function simpleTask(){
//     for(let step =0;step<50;step++)
//          {
//             console.log('Walking east to one step', step);
//         }
//     }

// let statTime = Date.now();
// simpleTask();
// let endTime = Date.now();
// console.log(`This task took ${endTime-statTime} milisecond to complete`);

console.log(Math.floor(myTime/1000));

console.log(myDate.getDate());
console.log(myDate.getFullYear());