const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let arr = input.map((ele) => ele.split(' ').map(Number));
    let answer = [];

    for (let ele of arr) {
        let [a, b, c] = ele;
        let max = Math.max(a, b, c);
        let tmp = [a, b, c].filter((val) => val !== max);
        let sum = tmp.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);

        if (Math.pow(max, 2) === sum) answer.push('right');
        else answer.push('wrong');
    }
    answer.pop();

    return answer.join('\n');
}

console.log(solution(input));
