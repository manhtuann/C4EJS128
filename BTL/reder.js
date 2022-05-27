console.log(arr);
function renderJs() {
    let result = '';
    let menu = document.querySelector('.menu')
    arr.forEach(item => {
        result += `
        <div class="name">
            <a href="detail.html?id=${item.id}">${item.name}</a>
        </div>
        <img src=${item.img} alt="">
        `
        menu.innerHTML = result
    })
}
renderJs()