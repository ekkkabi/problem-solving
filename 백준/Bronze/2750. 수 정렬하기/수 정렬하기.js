const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    return input
        .slice(1)
        .map(Number)
        .sort((a, b) => a - b)
        .join('\n');
}

console.log(solution(input));
