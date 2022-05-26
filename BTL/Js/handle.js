

let demo = document.querySelectorAll('.more');
let active = document.querySelectorAll('.active')
console.log(demo[0]
    );
function handle1 () {
    active[0].classList.toggle('remote')
}
function handle2 () {
    active[1].classList.toggle('remote')
}
function handle3 () {
    active[2].classList.toggle('remote')
}
demo[0].addEventListener('click',handle1)
demo[1].addEventListener('click',handle2)
demo[2].addEventListener('click',handle3)


