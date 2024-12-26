/*
 * JavaScript Call and Apply Method
 */

const greenLine = {
    bus : 'Green Line paribahan',
    bCode : 'GL',
    ticket : [],
    book(seatNumber,name){
        console.log(
            `${name} booked a seat on ${this.bus} ticket ${this.bCode}-${seatNumber} `
        );
        this.ticket.push({ticketInfo: `${this.bCode}-${seatNumber}`,name});
    } ,
};

greenLine.book('C1','Ali Hossain');
greenLine.book('A1','Rayhan Hossain');
console.log(greenLine);

const shohag ={
    bus : 'Shohag Paribahan',
    bCode: 'SH',
    ticket:[],

}

const book = greenLine.book;
// book(B1,Anik Hossain);
book.call(shohag,'B1','Anik Hossain');
book.call(shohag,'B2','Opu Hossain');
book.call(greenLine,'B2','Anis');
console.log(shohag);

const hanif = {
    bus : 'Hanif Enyerprise',
    bCode : 'HE',
    ticket : [],

};
book.call(hanif,'C1','Ratul');
console.log(hanif);

/**
 * Apply Method
 */

const ticketData = [ 'B2', 'Ratul'];
book.apply(greenLine,ticketData);
book.apply(hanif,[ 'B2', 'Rasel Hossain']);