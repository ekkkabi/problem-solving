const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let arr = input.map((ele) => ele.split(' ').map(Number));
    let answer = [...Array(20)].map((_, i) => i + 1);

    for (let val of arr) {
        let [a, b] = val;
        let reverseTarget = answer.slice(a - 1, b).reverse();
        answer.splice(a - 1, b - a + 1, ...reverseTarget);
    }
    return answer.join(' ');
}

console.log(solution(input));
