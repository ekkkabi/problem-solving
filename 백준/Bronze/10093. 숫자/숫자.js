const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [a, b] = input[0]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);
    let arr = [];
    for (let i = a + 1; i < b; i++) {
        arr.push(i);
    }
    return `${arr.length}\n${arr.join(' ')}`;
}

console.log(solution(input));
