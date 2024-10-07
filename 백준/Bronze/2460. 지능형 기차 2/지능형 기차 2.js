const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let arr = input.map((ele) => ele.split(' ').map(Number));

    let people = 0;
    let answer = [];

    for (let i of arr) {
        let [out, inner] = i;
        people += inner - out;
        answer.push(people);
    }

    return Math.max(...answer);
}

console.log(solution(input));
