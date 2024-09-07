const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [n, d] = input[0].split(' ').map(Number);
    const arr = Array(n)
        .fill()
        .map((_, i) => (i + 1).toString().split('').map(Number));

    let answer = 0;
    for (let ele of arr) {
        if (ele.includes(d)) {
            let count = ele.filter((val) => val === d).length;
            answer += count;
        }
    }
    return answer;
}

console.log(solution(input));
