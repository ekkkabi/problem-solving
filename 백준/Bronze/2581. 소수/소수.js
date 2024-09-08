const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let [m, n] = input.map(Number);

    let primeArr = [];
    for (let i = m; i <= n; i++) {
        if (i < 2) continue;
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) primeArr.push(i);
    }

    if (primeArr.length === 0) return -1;

    let sum = primeArr.reduce((acc, curr) => acc + curr);
    let min = Math.min(...primeArr);

    return `${sum}\n${min}`;
}

console.log(solution(input));
