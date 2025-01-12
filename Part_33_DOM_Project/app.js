const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click',function(){
//     body.style.backgroundColor = '#b71540';
// })

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click',function(){
//     body.style.backgroundColor = '#78e08f';
// })

// const blueColor = document.querySelector('.blue');
// blueColor.addEventListener('click',function(){
//     body.style.backgroundColor = '#1e3799';
// })

// const pinkColor = document.querySelector('.pink');
// pinkColor.addEventListener('click',function(){
//     body.style.backgroundColor = '#FC427B';
// })


button.forEach(function(value){
   value.addEventListener('click',function(){
    let className = this.classList[0];
    let color = ' ';
    if (className ==='red'){
color = '#b71540';
    }
    if (className ==='green'){
        color = '#78e08f';
            }
    if (className ==='blue'){
        color = '#1e3799';
                    }
    if (className ==='pink'){
        color = '#FC427B';
                            }
    if (className ==='purple'){
        color =' #82589F';
                            }
    body.style.backgroundColor = color;
    // console.log(color);

   });
});
