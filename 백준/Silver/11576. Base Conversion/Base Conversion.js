const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

function solution(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    let arr = input.slice(3).map(Number);
    let arrReverse = arr.reverse();

    let sum = 0;
    // A 진법 -> 10 진법
    for (let i = 0; i < arrReverse.length; i++) {
        let coverse = arrReverse[i] * a ** i;
        sum += coverse;
    }

    // 10 진법 -> B 진법
    let rest = sum;
    let restArr = [];
    while (rest > 0) {
        restArr.push(rest % b);
        rest = parseInt(rest / b);
    }

    return restArr.reverse().join(' ');
}

console.log(solution(input));
