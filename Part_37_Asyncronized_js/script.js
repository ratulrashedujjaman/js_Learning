// Introduction to Async JavaScript

/*
? Synchoronous 
? Single Threaded 
*/

// function a() {
//     console.log('a');
// }
// console.log('End');
// a();

// const a = function() {
//     console.log('Function Working');
//     let aTime = new Date().getTime();
//     while(aTime + 5000 >= new Date().getTime());
//     console.log('Completed');
// };
// console.log('First Line');
// a();
// console.log('Last Line');

// asynchronous JavaScript
/*
 * setTimeout
 * setInterval
 * promises
 * fetch
 * axios
 * XMLHttpRecquest
 */
// setTimeout(callback, timeinms);

// console.log('Hello');
// console.log('Hello2');
// setTimeout(function (){
//     console.log('Hello3');
// },5000);
// console.log('Hello4');
// console.log('Hello5');


// Promise

// let coffee = new Promise((res,rej) => {
//     if (false) {
//         return res();
//     } else {
//         return rej();
//     }
// });
// coffee
// .then(function () {
//     console.log('Resolved');
// })
// .catch(function() {
//     console.log('Rejected');
// });

// let mathans = new Promise((res, rej) => {
//     let n = Math.floor(Math.random()*10);
//     console.log(n);
//     if (n < 5) {
//         return res();
//     } else {
//         return rej();
//     }
// });
// mathans
// .then(function (){
//     console.log('Below');
// })
// .catch(function (){
// console.log('Above');
// })

const step1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Step One Done');
    },2000);
});

const step2 = new Promise((res, rej) => {
   setTimeout(() => {
res ('Step Two Done');
   },3000);
});

// step1
// .then(function (res){
//     console.log(res);
// });
// step2
// .then(function (res){
//     console.log(res);
// }); 

// Promise.all([step1,step2]).then(res => console.log(res));
// Promise.race([step1,step2]).then(res => console.log(res));

// let promise1 = new Promise((res,rej) => {
//     return res('Step one Done');
// });

// let promise2 = promise1.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res ('Step two Done');
//     });
// });
// promise2.then(function(data){
//     console.log(data);
// });


// Fatch
// function randomUser() {
// fetch('https://randomuser.me/api/').then
// (function (raw) {
//     return raw.json()
// }).then(function(data){
//     console.log(data);
// }).catch(function() {
//     console.log('no Data');
// })
// }
// randomUser();

// async function myFunction() {
//     return 'Hello';
// }
// console.log(myFunction());

// function myFunction() {
//     return Promise.resolve('Hello');
// }
// console.log(myFunction());

async function randomUser() {
    let urlApi = await fetch('https://randomuser.me/api/');

let rawData = await urlApi.json();
console.log(rawData);
console.log(`${rawData.results[0].name.title} ${rawData.results[0].name.first} ${rawData.results[0].name.last}`);
console.log(`${rawData.results[0].gender}`);
console.log(`${rawData.results[0].location.country}`);
}
randomUser();





