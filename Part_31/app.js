// document.querySelector('h1').innerText = 'Subscribe';
// document.querySelector('h1').innerText;
// ('Welcome');
// document.querySelector('h1').textContent;
// ('Welcome Ali');
// document.querySelector('h1').innerHTML;
// ('Welcome <span style="display: none;">Ali</span>');

const boxId = document.querySelector('#boxId');
boxId.style.backgroundColor = 'red';
boxId.style.width = '100px';
boxId.style.height = '100px';

const boxCls = document.querySelector('.boxCls');
boxCls.style.backgroundColor = 'orange';
boxCls.style.width = '100px';
boxCls.style.height = '100px';

document.getElementById('boxId').style.background = 'blue';

const MenuItem = document.querySelectorAll('a');
// MenuItem[0].style.color = 'red';
MenuItem.forEach(function (i){
    i.style.color = 'Red';
    i.style.fontSize = '24px';
});

const cusClass = document.getElementsByClassName('nav-link');

const convertedClass = Array.from(cusClass);
// for (let i = 0; i < cusClass.length; i++){
//     console.log(cusClass[i]);
// }

convertedClass.forEach(function (i){
    i.style.backgroundColor = '#262626';
    i.style.magin = '0 0 15px';
    i.style.padding ='10px 20px';
});

// document.querySelector('.boxCls').id;
// document.querySelector('.boxCls').className;

document.querySelector('.boxCls').getAttribute('id');
document.querySelector('.boxCls').setAttribute('class','text-green');

document.querySelector('.cta').setAttribute('class', 'text-green cta');