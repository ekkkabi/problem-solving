function solution(numbers, n) {
    let answer = 0;
    for(let ele of numbers){
        answer += ele
        if(answer > n)
            return answer;
    }
    return answer;
}