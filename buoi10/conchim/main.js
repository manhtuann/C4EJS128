var arr = [1, 2, 3, 2,1,2];

function handleSearch(arr) {
    let count = 0;
    let max = arr[0];
    let result;
    for (let i = 0; i < arr.length; i++) {
        for(let j = i; j< arr.length; j++){
            if(arr[i] == arr[j]){
                count++;
            }
            if(max < count){
                max = count;
                result = arr[i];
            }
        }
    }
    console.log(result);
}
handleSearch(arr)