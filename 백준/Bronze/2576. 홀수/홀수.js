const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let isOddArr = [];
    let arr = input.map(Number);
    for (let ele of arr) {
        if (ele % 2 !== 0) isOddArr.push(ele);
    }
    let sum = isOddArr.length !== 0 && isOddArr.reduce((acc, curr) => acc + curr);

    return isOddArr.length === 0 ? -1 : `${sum}\n${Math.min(...isOddArr)}`;
}

console.log(solution(input));
