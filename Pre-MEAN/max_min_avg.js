function maxMinAvg(arr){
    let sum = 0;
    let max = 0;
    let min = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        sum += arr[i];
    }
    let avg = sum / arr.length;
    let arrNew = [max, min, avg];
    return arrNew;
}