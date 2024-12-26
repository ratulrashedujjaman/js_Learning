/*
 * JavaScript Bind Method
 */

const greenLine = {
    bus: 'Green Line Paribahan',
    bCode: 'GL',
    ticket: [],
    book(setNumber, name) {
      console.log(
        `${name} booked a seat on ${this.bus} ticket ${this.bCode}-${setNumber}`
      );
      this.ticket.push({ ticketInfo: `${this.bCode}-${setNumber}`, name });
    },
  };
  greenLine.book('C1', 'Ali Hossain');
  greenLine.book('C2', 'Rayyan Hossain');
  console.log(greenLine);
  
  const shohagh = {
    bus: 'Shohagh Paribahan',
    bCode: 'SH',
    ticket: [],
  };
  
  const book = greenLine.book;
  
  // book('B1', 'Kawcher Hossain');
  
  book.call(shohagh, 'B1', 'Kawcher Hossain');
  book.call(shohagh, 'B2', 'Durjoy Hossain');
  book.call(greenLine, 'B2', 'Durjoy Hossain');
  console.log(shohagh);
  
  const hanif = {
    bus: 'Hanif Paribahan',
    bCode: 'HN',
    ticket: [],
  };
  
  book.call(hanif, 'B2', 'Durjoy Hossain');
  
  // Apply
  
  const ticketData = ['B2', 'Durjoy Hossain'];
  book.apply(greenLine, ticketData);
  book.apply(hanif, ['A2', 'Ahad Hossain']);

  // Bind
// const ticketSH = book.bind(shohagh);
// ticketSH('E1', 'Ali Hossain');

const ticketSH = book.bind(shohagh, 'E1');
ticketSH('Abul Hossain');

// const person = {
//     firstName : 'Ali',
//     lastName : 'Hossain',
//     display: function () {
//       return  this.firstName+ ' ' +this.lastName;
//     },
// };
// const display = person();
// console.log(display);

const person = {
    firstName : 'Ali',
    lastName : 'Hossain',
    display: function () {
        // console.log(this.firstName+ ' ' +this.lastName);
     
    },
};
const display = person.display;
console.log(setTimeout(display.bind(person),2000));

greenLine.buses = 20;
greenLine.buybus = function(){
    console.log(this);
    this.buses++
    console.log(this.buses);
}
// greenLine.buybus();

document
.querySelector('.btn')
.addEventListener("click",greenLine.buybus.bind(greenLine));



const addTax = (rate , value) => value + (value*rate)/100;
console.log(addTax(10,100));

const addVAT = addTax.bind(null,15);
console.log(addVAT(100));
