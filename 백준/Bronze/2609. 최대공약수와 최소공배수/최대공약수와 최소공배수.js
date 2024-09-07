const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [a, b] = input[0].split(' ').map(Number);

    let r;
    let i = a,
        j = b;
    while (i % j > 0) {
        r = i % j;
        i = j;
        j = r;
    }
    let gcd = j;
    let lcm = (a * b) / gcd;

    return `${gcd}\n${lcm}`;
}

console.log(solution(input));
