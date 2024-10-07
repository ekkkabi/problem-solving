const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = input.map(Number)[0];
    let arr = Array(n)
        .fill()
        .map((v, i) => i + 1);
    let answer = [];

    while (arr.length !== 1) {
        answer.push(arr.shift());
        arr.push(arr.shift());
    }
    answer.push(arr[0]);

    return answer.join(' ');
}

console.log(solution(input));
