const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [n, k] = input[0].split(' ').map(Number);
    let arr = input.slice(1, n + 1).map((ele) => ele.split(' ').map(Number));

    let girl = arr.filter((ele) => ele[0] === 0);
    let boy = arr.filter((ele) => ele[0] === 1);

    let gArr = Array(6).fill(0),
        bArr = Array(6).fill(0);

    for (let val of girl) {
        gArr[val[1] - 1]++;
    }
    for (let val of boy) {
        bArr[val[1] - 1]++;
    }

    let answer = 0;
    for (let val of gArr) {
        answer += parseInt(val / k) + (val % k !== 0 ? 1 : 0);
    }
    for (let val of bArr) {
        answer += parseInt(val / k) + (val % k !== 0 ? 1 : 0);
    }

    return answer;
}

console.log(solution(input));
