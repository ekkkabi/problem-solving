const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let a = input[0].replace('\r', '').split('');
    let b = input[1].split('');

    let aArr = Array(26).fill(0),
        bArr = Array(26).fill(0);

    for (let i = 0; i < a.length; i++) {
        aArr[a[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < b.length; i++) {
        bArr[b[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let answer = 0;
    for (let j = 0; j < 26; j++) {
        if (aArr[j] !== bArr[j]) answer += Math.abs(aArr[j] - bArr[j]);
    }

    return answer;
}

console.log(solution(input));
