function solution(arr, flag) {
    let answer = [];
    for(let i = 0; i<arr.length; i++){
        let j = arr[i];
        let isTrue = flag[i];
        if(isTrue){
            for(let k = 0; k<j*2; k++){
                answer.push(j);
            }
        }else{
            for(let k = 0; k<j; k++){
                answer.pop();
            }
        }
    }
    return answer;
}