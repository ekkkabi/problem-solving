const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    return Number(input[0]) % 2 ? 'SK' : 'CY';
}

console.log(solution(input));
