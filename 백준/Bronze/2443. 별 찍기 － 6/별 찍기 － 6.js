const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input);
    let answer = [];

    let i = 1;
    for (let j = 1; j < n * 2; j += 2) {
        let str = '';
        str += ' '.repeat(n - i) + '*'.repeat(j);
        answer.push(str);
        i += 1;
    }

    return answer.reverse().join('\n');
}

console.log(solution(input));
