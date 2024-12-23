/*
 * JavaScript Filter Map and reduce
 */
const fruits = ['Mango','Banana','Apple','Orange','Grape'];
const country = new Map([
    ['Bn','Bangladesh'],
    ['Ind','India'],
    ['Pak','Pakistan'],
    ['Np','Nepal'],
]);

country.set('Bu','Bhutan');
const myCountry = {
    Bn: 'Bangladesh',
    Ind: 'India',
    Pak: 'Pakistan',
    Np: 'Nepal',
}; 

const stack = [
    {
        name: 'MERN Stack',
        property: 'Mongo,Express,React,Node',
        foundation: 'JavaScript',
        tranding: true,
        price: 5000
    },
    {
        name: 'MEAN Stack',
        property: 'Mongo, Express, Angular, Node',
        foundation: 'JavaScript',
        tranding: false,
        price: 3000,
      },
      {
        name: 'Laravel',
        property: 'JavaScript, Vue, PHP, Laravel, MySQL',
        foundation: 'PHP',
        tranding: true,
        price: 4000,
      },
      {
        name: 'WordPress',
        property: 'JavaScript, PHP, WordPress, MySQL',
        foundation: 'PHP',
        tranding: false,
        price: 3500,
      },
];

// fruits.forEach((fruit => console.log(fruit)));
const fruitCapB = fruits.filter((fruit)=>fruit.toLocaleLowerCase().startsWith('b'));

const fruitStartG = fruits.filter(fruit => fruit.toLocaleLowerCase().includes('g'));

const fruitLen5 = fruits.filter(fruit => fruit.length === 5);
// console.log(fruitLen5);

const numbers = [1,2,3,4,5,6,7,8,9];
// const big5 = numbers.filter(num => num > 5);
const big5 = numbers.filter(num => {
    return num > 5;
});
// console.log(big5 );

const forNums = []
numbers.forEach(num => {
    if  (num>5){
        forNums.push(num)
    }
});
console.log(forNums);

let userStack =stack.filter(sk => sk.foundation === 'PHP');
console.log(userStack);

// const myNum = numbers.map(num => num + 5);
const myNum = numbers
.map(num => num + 5)
.map(num => num*5)
.filter(num => num >=50);
// console.log(myNum);

/**
 * Reduce
 * 
 * const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

 */
const myTotal = numbers.reduce((acc,curValue) => {
    console.log(`Accumulator ${acc} and CurrentValue ${curValue}`);
    return acc + curValue;
},0);

// const myTotal = numbers.reduce((acc,curValue) => (acc+curValue), 0)
// console.log(myTotal);

const coursePrice = stack.reduce((acc,course) => acc + course.price, 500);
console.log(coursePrice);