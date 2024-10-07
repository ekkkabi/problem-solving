const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    return input[0]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b)
        .join(' ');
}

console.log(solution(input));
