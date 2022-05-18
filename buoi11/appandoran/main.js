let start =7;
let end = 10;
let locAp = 4;
let locOra = 12;
let apples = [-3,4,6];
let oranges = [4,5,6];

function handle() {
    let newarr1 = [];
    let newarr2 = [];
    let apphours = 0;
    for(let i = 0; i< apples.length; i++){
        newarr1 +=  ` ${locAp - apples[i]} `;
        if(newarr1 > start && newarr1 < end){
            apphours++
        }
    }
    let oranhous =0;
    for(let i = 0; i< oranges.length;i++){
        newarr2 += ` ${locOra -  oranges[i]} `
        if(newarr2 > start && newarr2 < end){
            oranhous++
        }
    }
    
console.log(apphours);
console.log(oranhous);
}
handle()