// JavaScript Numbers
const x = 9999999999999999;
const y = 0.6;
const z = 0.7;
// const l = y+z;
const l = (y+z).toFixed(2);     /*string value*/
// console.log(y+z);            /*Problemetic output*/ 
// console.log((y*10+z*10)/10);    /*Correct Output*/
// console.log(l.toFixed(2));          /* Output string */
// console.log(new Number(l));  

const a = 10;
const b = 20;
const c = 248;
const d = 'JavaScript';
const e = c-d;

// console.log(l+a+b +c);
// console.log(c-l);
// console.log(c*l);
// console.log(c/l);
// console.log(c-d);
// console.log(e);

/*
let num = 2;
let value = '';
while (num !=Infinity){
    num= num*num ;
    value = value+num+ '<br>'
}
document.getElementById('title').innerHTML = value;
*/ 

// console.log(c.toString(2));   /**decimal to binary */
// console.log(c.toString(16));  /**decimal to hexa decimal */

const g = 300;
const r = 9.564864564;
const h = new Number (300);

// console.log(g==h);
// console.log(g===h);

// console.log(r.toPrecision(3));
// console.log(r.toFixed(3));

let newNum = Number.EPSILON;
newNum = Number.MAX_VALUE;
newNum = Number.MIN_VALUE;
newNum = Number.POSITIVE_INFINITY;
newNum = Number.NEGATIVE_INFINITY;
newNum = Number.NaN;

console.log(newNum);