const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input[0]);

    let arr = [0, 1];
    while (arr.length <= n) {
        for (let i = 2; i <= n; i++) {
            let f = arr[i - 2] + arr[i - 1];
            arr.push(f);
        }
    }
    return arr[n];
}

console.log(solution(input));
