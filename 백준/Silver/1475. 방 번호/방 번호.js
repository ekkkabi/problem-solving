const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = input[0].split('').map(Number);
    let freq = Array(10).fill(0);

    for (let ele of n) {
        freq[ele]++;
    }

    freq[6] += freq[9];
    freq.pop();
    freq[6] = Math.round(freq[6] / 2);

    return Math.max(...freq);
}

console.log(solution(input));
