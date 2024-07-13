// const button = document.querySelectorAll('.button');
// const body = document.querySelector('body');
// // console.log(body);
// button.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click', function(e){
//         // console.log(e);
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'red') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'green') {
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })



const body=document.querySelector('body')
const  button = document.querySelectorAll('.button')
button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){
        if (e.target.id === 'yellow') {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='red') {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='green') {
            body.style.backgroundColor=e.target.id;
        }
    })
    
})