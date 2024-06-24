function solution(arr) {
    let stk = [];
    let i = 0;
    while(i<arr.length){
        if(stk.length == 0){
            stk.push(arr[i]);
            i++;
        }else{
            if(stk.at(-1)<arr[i]){
                stk.push(arr[i]);
                i++;
            }else{
                stk.pop();
            }
        }     
    }
    return stk;
}
console.log(solution([1, 4, 2, 5, 3]));