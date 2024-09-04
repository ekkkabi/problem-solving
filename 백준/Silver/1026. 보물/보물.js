const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

function solution(input) {
    let count = parseInt(input[0]);
    let a = input
        .slice(1, 1 + count)
        .join(' ')
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);
    let b = input
        .slice(1 + count)
        .join(' ')
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b)
        .reverse();

    let answer = 0;
    for (let i = 0; i < count; i++) {
        let tmp = a[i] * b[i];
        answer += tmp;
    }
    return answer;
}

console.log(solution(input));