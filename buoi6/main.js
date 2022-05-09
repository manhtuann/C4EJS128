var h = 5;
// bài1: vẽ tam giác vuông

// for(let i = 1; i <= h ; i++ ){
//     for(let j = 1 ; j <= i ; j++) {
//         document.write("*");
//     }
//     document.write("</br >");

// }

//bài 2: vẽ tam giác cân



// for(let i = 1 ; i <= h ; i++){
//     for(let k = h; k> i; k--)
//         document.write('&nbsp;&nbsp;')
//     for(let j = 1; j <= 2*i - 1; j++ ) {
//         document.write('*');
//     }
//     document.write('<br />');
// }




// bài 3: vẽ tam giác rỗng
// var h = 4;
// for(let i = 1; i <= h ; i++){
//     for(let j =1; j <= i; j++){
//         if(i == h || j == i || j ==1 ){
//             document.write('*')
//         }
//         else document.write("&nbsp;")

//     }
//     document.write('<br/>')
// }

// bài 4:vẽ hình tam giác xoay 90 độ
// var n = 5;

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     document.write('<br/>')
// }
// for (let i = n - 1; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         document.write('*')
//     }
//     document.write('<br/>')
// }
// bài 5: 2 tam giác đối nhau
// for(let i = 1 ; i < h; i ++){
//         for(let j = 1 ; j <= i; j++){
//             document.write('~')
//         }
//         for(let j = 1; j <= 2*(h-i)-1; j++ ){
//             document.write('*')
//         }
//         document.write('<br/>')
// }
// for(let i = h -1; i >=1 ; i--){
//     for(let j = 1 ; j <= i; j++){
//         document.write('~')
//     }
//     for(let j = 1; j <= 2*(h-i)-1; j++ ){
//         document.write('*')
//     }
//     document.write('<br/>')
// }

// bài 6:hình thoi bằng số
// var k= h-1;
// for(let i = 1; i<=h ; i++) {
//     for(let j =1; j<=h-i; j ++){
//         document.write('~')
//     }
//     for(let j =1; j <=2*i; j++){

//             document.write("*")
//     }
//     document.write("<br/>")
// }
// for(let i = h-1; i>= 1; i--) {
//     for(let j =1; j<=h-i; j ++){
//         document.write('~')
//     }
//     for(let j =1; j <=2*i; j++){
//         document.write("*")
//     }
//     document.write("<br/>")
// }
// bài 7: kiểm tra số nguyên tố
// var result = true;
// if (h < 2) result = false;
// else if(h ==2 ) result =true;
// else if(h%2 == 0) result =false;
// else {
//     for(var i =3; i< h-1; i ++) {
//         if(h%i ==0){
//             result=false;
//             break
//         }
//     }
// }
