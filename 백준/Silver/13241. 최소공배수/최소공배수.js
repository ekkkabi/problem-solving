const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [a, b] = input[0].split(' ').map(Number);

    let r;
    let i = a;
    let j = b;
    while (i % j > 0) {
        r = i % j;
        i = j;
        j = r;
    }
    let gcd = j;
    let lmc = (a * b) / gcd;

    return lmc;
}

console.log(solution(input));
