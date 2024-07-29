function solution(n) {
    let arr = [];
    let i = 1;
    while(arr.length < n){
        if(i%3!==0 && !String(i).includes('3'))
            arr.push(i);
        i++;
    }
    return arr[n-1];
}