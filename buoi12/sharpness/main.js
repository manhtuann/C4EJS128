let bg = document.querySelector('.background');
let load = document.querySelector('.load');

let count = 0;

const run = setInterval(handle,30)


function handle () {
    count++;
    if(count > 99) {
    clearInterval(run)
    }
    load.innerText = `${count}%`
    load.style.opacity = (count -100)*-1/100;
    bg.style.filter = `blur(${(count*-30)/100 +30}px)`


}
