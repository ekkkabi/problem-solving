const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [n, k] = input[0].split(' ').map(Number);
    let arr = [...new Array(parseInt(n))].map((_, i) => i + 1);

    let answer = [];
    while (answer.length !== n) {
        let index = (k - 1) % arr.length;
        arr = arr.slice(index).concat(arr.slice(0, index));
        let del = arr.shift();
        answer.push(del);
    }

    return `<${answer.join(', ')}>`;
}

console.log(solution(input));
