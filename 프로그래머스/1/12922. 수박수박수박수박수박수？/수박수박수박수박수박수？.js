function solution(n) {
    let answer = '';
    let isOdd = '수';
    let isEven = '박'
    for(let i = 1; i<= n; i++){
        if(i % 2 !== 0)
            answer += isOdd;
        else
            answer += isEven;
    }
    return answer;
}