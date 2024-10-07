const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input);
    let answer = [];
    for (let i = n; i > 0; i--) {
        let str = '';
        str += ' '.repeat(n - i);
        str += '*'.repeat(i);
        answer.push(str);
    }
    return answer.join('\n');
}

console.log(solution(input));
