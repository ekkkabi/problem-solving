const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    const a = Number(input[0]);
    const b = Number(input[1]);
    const c = Number(input[2]);
    let numArr = (a * b * c).toString();

    let freq = Array(10).fill(0);
    for (let val of numArr) {
        freq[val]++;
    }
    return freq.join('\n');
}

console.log(solution(input));
