let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
function handle(){        
        let left =0;
        let right = 0;
        let result =0;
    for(let i =0 ; i<arr.length;i++) {

        for(let j =0; j<arr.length; j++){
            if(i == j){
                left += arr[i][j]
            }
            if(i +j == arr.length-1){
                right += arr[i][j]
            }
        }
        result = Math.abs(right - left);
        console.log(result);
    }
}
handle()
