let left = document.querySelector('.btn-left');
let right = document.querySelector('.btn-right');
let slide = document.querySelectorAll('.slide');
let container = document.querySelector('.container');

let count = 0;
console.log(container);
right.addEventListener('click', () => {
    count++;
    if (count > slide.length - 1) {
        count = 0;
    }
    setImg()
    setActiveSlide()
})
left.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = slide.length - 1
    }
    setImg()
    setActiveSlide()
})
function setImg() {
    container.style.backgroundImage = slide[count].style.backgroundImage
}
function setActiveSlide() {
    slide.forEach((slide) => slide.classList.remove('active'))

    slide[count].classList.add('active')
}