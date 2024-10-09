const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let num = Number(input[0]);
    let arr = input
        .slice(1, num + 1)
        .map((ele) => ele.split(' ').map((str) => str.replace('\r', '')));

    let answer = [];
    for (let val of arr) {
        let [a, b] = val;
        let aArr = a.split('').sort();
        let bArr = b.split('').sort();

        if (aArr.join('') === bArr.join('')) answer.push('Possible');
        else answer.push('Impossible');
    }
    return answer.join('\n');
}

console.log(solution(input));
