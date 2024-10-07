const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input);
    let answer = [];
    for (let i = n; i > 0; i--) {
        let str = '';
        answer.push('*'.repeat(i));
    }
    return answer.join('\n');
}

console.log(solution(input));
