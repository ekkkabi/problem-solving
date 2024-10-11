const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let t = Number(input[0]);
    let arr = input.slice(1, t + 1).map((ele) => ele.trim().split(''));

    let op = ['<', '>', '-'];
    let answer = [];
    for (let i = 0; i < t; i++) {
        let left = [],
            right = [];
        for (let j = 0; j < arr[i].length; j++) {
            let cmd = arr[i][j];
            if (cmd === '-') {
                if (left.length > 0) left.pop();
            } else if (cmd === '<') {
                if (left.length > 0) right.push(left.pop());
            } else if (cmd === '>') {
                if (right.length > 0) left.push(right.pop());
            } else {
                left.push(cmd);
            }
        }

        answer.push(left.join('') + right.reverse().join(''));
    }

    return answer.join('\n');
}

console.log(solution(input));
