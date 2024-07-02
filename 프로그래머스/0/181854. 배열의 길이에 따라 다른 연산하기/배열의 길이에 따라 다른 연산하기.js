function solution(arr, n) {
    let answer = arr.slice();
    for(let i = 0; i<arr.length; i++){
        if(arr.length % 2 !== 0){
            let tmp = (i % 2 === 0) ? answer[i] + n : answer[i];
            answer[i] = tmp;
        }else{
            let tmp = (i % 2 !== 0) ? answer[i] + n : answer[i];
            answer[i] = tmp;
        }
    }
    return answer;
}