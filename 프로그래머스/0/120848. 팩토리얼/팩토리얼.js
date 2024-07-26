function solution(n) {
    var answer = 1;
    while(factorial(answer) <= n){
        factorial(answer);
        answer++;
    }
    return answer-1;
}

function factorial(n) {
    if(n===1) return 1;
    return n * factorial(n - 1);
}