const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    /**
     * 영식 Y 요금제 : 30초마다 10원
     * 민식 M 요금제 : 60초마다 15원
     */
    let n = Number(input[0]);
    let arr = input[1].split(' ').map(Number);

    let y = 0,
        m = 0;
    for (let val of arr) {
        y += Math.floor(val / 30) * 10 + 10;
        m += Math.floor(val / 60) * 15 + 15;
    }

    if (y === m) return `Y M ${y}`;
    else if (y < m) return `Y ${y}`;
    else return `M ${m}`;
}

console.log(solution(input));
