const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [n, k] = input[0].split(' ').map(Number);
    let arr = input[1]
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);
    return arr[k - 1];
}

console.log(solution(input));
