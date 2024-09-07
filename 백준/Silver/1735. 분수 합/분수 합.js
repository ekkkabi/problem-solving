const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [a, b] = input[0].split(' ').map(Number);
    let [c, d] = input[1].split(' ').map(Number);

    let top_sum = a * d + b * c;
    let bottom_sum = b * d;

    let r;
    let i = top_sum;
    let j = bottom_sum;
    while (i % j > 0) {
        r = i % j;
        i = j;
        j = r;
    }
    let gcd = j;

    return `${top_sum/j} ${bottom_sum/j}`;
}

console.log(solution(input));
