$(document).ready(function(){
    $('.list-item').slick({
        infinite: true,
        slidesToShow: 4,
        arrow: false,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right'></i></button>"
    });
});

let more = document.getElementById('more');
let more1 = document.getElementById('more1');
let more2 = document.getElementById('more2');

let active = document.querySelector('.active');
let active1 = document.querySelector('.active1');
let active2 = document.querySelector('.active2');


function handleClick1() {
    active.classList.toggle('remote')
}
function handleClick2() {
    active1.classList.toggle('remote')
}
function handleClick3() {
    active2.classList.toggle('remote')
}
more.addEventListener('click',handleClick1)
more1.addEventListener('click',handleClick2)
more2.addEventListener('click',handleClick3)
