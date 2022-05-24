let left = document.querySelector(".img-left");
let right = document.querySelector('.img-right');
let container = document.querySelector('.container');
console.log(right);
left.addEventListener('mouseenter', ()=>{   
    container.classList.add('hover-left')
})
left.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-left')
})
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
})
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})