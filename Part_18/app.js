
/*
if (condition) {
    Code;
}
*/
let age = 4;
if (age >40){
    console.log('You are  old');
}

else if (age > 18 ){
    console.log('You are eligible for this step');
} else {
    console.log('You are not eligible');
}

let category = 'motobike';
let carType;

switch (category){
    case 'car':
        carType = 'This is a car';
        break;
    case 'bike':
        carType = 'This is a Bike';
        break;
        default :
        carType = 'Unknown!';
}

console.log(carType);