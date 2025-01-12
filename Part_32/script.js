//Add Text inside tags

let headtitle = document.querySelector('h1');
// headtitle.innerText = 'Hello Procoder!';
headtitle.innerText = headtitle.innerText + ' Procoder';

//Change text
let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'New text';
// boxes[1].innerText = 'New text';
// boxes[2].innerText = 'New text';

// let newNum = 1
// for (box of boxes){
//     box.innerText = `Box no ${newNum}`
//     newNum++;
// }

//Create Element
let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';

let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn);   //Last
// heroArea.prepend(learnBtn);   //Fast
// heroArea.before(learnBtn);   //before
// heroArea.after(learnBtn);   //after

//Add Element
// function addFruits(nameFruits){
//     const li= document.createElement('li');
//     li.innerHTML = `${nameFruits}`;

//     document.querySelector('ul').appendChild(li);
// }
// addFruits('Orange');
// addFruits('Grapes');

//Add Element Optimized 
function addFruitsOP(nameFruits){
    const li= document.createElement('li');
   li.appendChild(document.createTextNode(nameFruits));
    document.querySelector('ul').appendChild(li);
}
addFruitsOP('Orange');
addFruitsOP('Grapes');

//Edit
const editFruits = document.querySelector
('li:first-child')
// console.log(editFruits);
editFruits.innerText = 'BlueBerry';
editFruits.innerText = 'BlueBerrys';

const newFruits = document.createElement('li')
newFruits.textContent = 'StrawBerry';
editFruits.replaceWith(newFruits);

//Edit With tag
const editTag = document.querySelector('li:last-child');
// editTag.outerHTML = '<p>Lemon</p>';

//Remove
editTag.remove();