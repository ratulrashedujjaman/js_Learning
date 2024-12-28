/**
 * Immediately Invoked Function Expressions (IIFE)
 */

const aFunction = function(a,b){
    console.log(`A simple function ${a+b}`);
}
aFunction(3,4);
aFunction(4,5);

(function (a,b){
    console.log(a+b);
})
(4,5);

(function (c,d){
    console.log(c*d);
})
(10,5);

((a,b) => console.log(a*b) )
(5,2);

// DOM

(function (){
    const h3 = document.querySelector('.h3');
const h4 = document.querySelector('.h4');
h3.style.backgroundColor = 'Red';
h4.style.backgroundColor = 'yellow';
}
)
();

const myModule = (function () {
    let privateVar = 'This is a private variable';
    function privateFunc() {
        console.log('This is a private function');
    }
    return{
        
        publicVar: 'This is public variable',
        
        publicMethod : function () {
            privateFunc();
            return 'This is a public method';
          
        },
       
    };
})
();
// console.log(myModule.privateVar);  //Unaccessible
// console.log(myModule.privateFunc);    //Unaccessible
console.log(myModule.publicVar);
console.log(myModule.publicMethod());