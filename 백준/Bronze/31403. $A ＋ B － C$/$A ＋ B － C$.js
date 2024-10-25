const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let a = input[0].trim();
    let b = input[1].trim();
    let c = input[2];

    let result1 = Number(a) + Number(b) - Number(c);
    let result2 = Number(a + b) - Number(c);

    return `${result1}\n${result2}`;
}

console.log(solution(input));