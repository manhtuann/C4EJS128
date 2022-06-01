function renderJs() {
    let result = '';
    let menu = document.querySelector('.menu')
    arr.forEach(item => {
        result += `
        <div>
            <div class="name">
            <a href="detail.html?id=${item.id}">${item.name}</a>
            </div>
            <img src=${item.img} alt="">
            <h1 class="title">${item.price}</h1>
            <input class="input" type="number" min="1" max="999" pattern="[0-9]*" value="1">
            <button onclick="addCart(this)">thêm giỏ hàng</button>
        </div>`
        menu.innerHTML = result
    })
}
// renderJs()
var cart = [];


function addCart(a) {
    var boxsp = a.parentElement.children;
    var img = boxsp[1].src;
    var price = boxsp[2].innerText;
    var name = boxsp[0].innerText;
    var sl = boxsp[3].value;
    var sp = new Array(img, price, name, sl)
    cart.push(sp)
    showCart()

    // lưu giỏ hàng

    sessionStorage.setItem('cart',JSON.stringify(cart));
}
function showCart() {
    document.getElementById('countsp').innerHTML = cart.length;
}
// addCart()

function viewCart(){
    var gh = sessionStorage.getItem('cart')
    var cart = JSON.parse(gh)
    var result ='';
    for(let i =0; i< cart.length; i++) {
        result += `
        <tr>
        <td class="hidden-xs">
            <a href="#">
                <img src=${cart[0]}
                    alt="Age Of Wisdom Tan Graphic Tee" title="" width="47" height="47">
            </a>
        </td>
        <td><a href="#">${cart[2]}</a>
        </td>


        <td>
            <div class="input-group bootstrap-touchspin">
                <span class="input-group-btn">
                    </span><span
                    class="input-group-addon bootstrap-touchspin-prefix"
                    style="display: none;"></span><input type="text" name="" value="1"
                    class="input-qty form-control text-center" style="display: block;"><span
                    class="input-group-addon bootstrap-touchspin-postfix"
                    style="display: none;"></span><span class="input-group-btn"></span></div>
        </td>
        <td class="price">${cart[1]}</td>
        <td>$ 122.21</td>
        <td class="text-center">
            <a href="#" class="remove_cart" rel="2">
                <i class="fa fa-trash-o"></i>
            </a>
        </td>
    </tr>
    <tr>
                                    <td colspan="4" align="right">Total</td>
                                    <td class="total" colspan="2"><b>$ 163.47</b>
                                    </td>
                                </tr>
        `
    }
    document.getElementById('main').innerHTML = result;
}
viewCart()

