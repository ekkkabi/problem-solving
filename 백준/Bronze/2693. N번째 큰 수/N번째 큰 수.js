const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let t = Number(input[0]);
    let numArr = input.slice(1, t + 1);

    let answer = [];
    for (let ele of numArr) {
        let arr = ele
            .split(' ')
            .map(Number)
            .sort((a, b) => a - b)
            .reverse();
        answer.push(arr[2]);
        answer.push('\n');
    }
    answer.pop();

    return answer.join('');
}

console.log(solution(input));
