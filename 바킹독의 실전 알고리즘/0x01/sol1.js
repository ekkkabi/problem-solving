function solution(input) {
    let answer = 0;
    for (let i = 1; i <= input; i++) {
        if (i % 3 === 0 || i % 5 === 0) answer += i;
    }
    return 0;
}

console.log(solution(27639));
