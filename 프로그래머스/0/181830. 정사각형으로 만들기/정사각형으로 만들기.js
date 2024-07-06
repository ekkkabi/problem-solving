function solution(arr) {
    // 최대 길이 구하기
    let maxLenRow = 0;
    let maxLenCol = arr.length; 
    for (let ele of arr) {
        if (ele.length > maxLenRow) {
            maxLenRow = ele.length;
        }
    }
    let maxLen = Math.max(maxLenRow, maxLenCol);

    // 최대 길이맞추기
    for(let i = 0; i<arr.length; i++){
        while(arr[i].length<maxLen){
            arr[i].push(0);
        }
    }
    
    let zeroArr = Array(maxLen).fill(0);    
    while(arr.length < maxLen) {
        arr.push([...zeroArr]);
    }
    return arr;
}