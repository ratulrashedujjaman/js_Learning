// JavaScript Loop

// for loop
 let car =['BMW','AUDI','TOYOTA','FORD','TESLA','Lamborghini'];
 car.push('Subberu')

//  console.log(car[0]);
//  console.log(car[1]);

for (let i=0; i<car.length; i++){
    // console.log(car[i]);
}

// for in loop
let person ={
    name : 'Ali',
    age : 30,
    country : 'Bangladesh',
    job : 'Web developer',
};

for (let i in person){
    let capLetter = i.charAt(0).toLocaleUpperCase() +i.slice(1);
    // console.log( i + ' : ' +person[i] );
    console.log(capLetter + ': ' +person[i] );
}

//for each method
car.forEach(function (i){
    console.log(i);
});

//for of loop
for(let i of car){
    console.log(i);
}

//while loop

let num = 0;
while(num<10){
    console.log(num);
    num++; 

}