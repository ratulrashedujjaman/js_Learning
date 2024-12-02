// JavaScript Strings

// You can take strings with single Quote
const fullName = 'Ali Hossan';

// OR You can take strings with dubble quote
const country = "Bangladesh";

const sen = "I'm form Bangladesh"
const sen2 = 'I\'m form Bangladesh'

const quatation = 'Bill Gates says "Some text" '
const quatation2 = "Bill Gates says \"Some text\""
const quatation3 = "Bill Gates says \n \"Some text\""
// console.log(quatation2);

// document.getElementById('title').innerText=quatation3
// console.log(quatation3);

let info = 'Ali' + 'Hossain';
let info2 = fullName + "" + country
let info3 = 'I am ' + fullName + ' I am from ' + country

// let info4 = `I am ${fullName} I am from ${country} ${4+4}`;

let info5 = `I am ${fullName}  
I am from ${country}
${4+4}`;

 
// console.log(info5);
// document.getElementById('title').innerText=info5;
// console.log(info5.length);
// console.log(info5.charAt(2));
// console.log(info5.indexOf('a'));
// console.log(info5.toUpperCase());
// console.log(info5.toLowerCase());

const fullName2 = new String("Shuvo");
const fullName3 = new String("Shuvo");
// console.log(fullName2);
// console.log(fullName2[4]);

const student = 'Ali Hossain';
/*
  A  L  I      H  O  S  S  A  I  N
  0  1  2  3   4  5  6  7  8  9 10
-11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 

*/

// console.log(student.slice(-6));
// console.log(student.slice(4,7))
// console.log(student.slice(8,1));
// console.log(student.substring(8,1));
// console.log(student.slice(-9,-3));
// console.log(student.substring(-6));

const someText = '      Ali        ';
console.log(someText.trim());           /*All space trim*/
console.log(someText.trimEnd());        /*End space trim*/
console.log(someText.trimStart());      /*Start space trim*/

const url = 'https://ali.com/new%20Blog'; /*Replace something*/
console.log(url.replace('%20','-'));

console.log(info5.split(''));  /**string to array conversion */


