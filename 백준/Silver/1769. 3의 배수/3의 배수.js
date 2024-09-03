const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
    let arr = input.split('').map(Number);
    let count = 0;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    while (arr.length > 1) {
        sum = arr.reduce((acc, curr) => acc + curr, 0);
        arr = String(sum).split('').map(Number);
        count += 1;
    }

    let say = sum % 3 !== 0 ? 'NO' : 'YES';
    return `${count}\n${say}`;
}

console.log(solution(input));