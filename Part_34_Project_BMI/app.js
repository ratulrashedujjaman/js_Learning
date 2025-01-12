let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');

let score = document.getElementById('score');
let result = document.querySelector('.result');

button.addEventListener('click', function(){
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    // console.log(newHeight*newWeight);
    // console.log(typeof newHeight);
    newHeight = newHeight / 100;
    sqrHeight = newHeight * newHeight;

    let bmi = newWeight / sqrHeight;
  
    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';
    if (score.textContent < 18.6){
score.style.background = "#f1c40f";
    } else if (score.textContent > 24.9){
score.style.background = "#c0392b";
    } else {
score.style.background = "#27ae60";
    }
});

let form = document.getElementById('form');
form.addEventListener('submit' , function(e){
    e.preventDefault();
})