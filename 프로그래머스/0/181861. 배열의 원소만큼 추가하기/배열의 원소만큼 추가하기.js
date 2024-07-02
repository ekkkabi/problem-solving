function solution(arr) {
    let answer = [];
    for(let i = 0; i<arr.length; i++){
        let j = arr[i];
        for(let k = 0; k<j; k++){
            answer.push(j)
        }
    }
    return answer;
}