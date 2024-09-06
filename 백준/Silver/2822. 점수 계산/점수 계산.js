const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let scoreArr = input
        .map(Number)
        .sort((a, b) => a - b)
        .reverse()
        .slice(0, 5);

    let sum = scoreArr.reduce((acc, curr) => acc + curr);

    let numArr = [];
    for (let i = 0; i < input.length; i++) {
        if (scoreArr.includes(Number(input[i]))) numArr.push(i + 1);
    }
    let idxArr = numArr.sort((a, b) => a - b).join(' ');

    return `${sum}\n${idxArr}`;
}

console.log(solution(input));
