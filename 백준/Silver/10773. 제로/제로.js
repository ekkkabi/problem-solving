const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input[0]);
    let arr = input.slice(1, n + 1).map(Number);

    let stack = [];
    for (let ele of arr) {
        if (ele === 0) stack.pop();
        else stack.push(ele);
    }

    return stack.length === 0 ? 0 : stack.reduce((acc, curr) => acc + curr);
}

console.log(solution(input));
