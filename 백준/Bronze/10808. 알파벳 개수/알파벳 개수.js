const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let s = input[0].split('');

    let freq = Array(26).fill(0);
    for (let ch of s) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return freq.join(' ');
}

console.log(solution(input));
