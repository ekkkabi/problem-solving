const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let n = Number(input[0]);
    let arr = input.slice(1, n + 1).map((ele) => ele.trim().split(''));

    let anwer = [];
    for (let i = 0; i < n; i++) {
        anwer.push(isVPS(arr[i]));
    }

    return anwer.flat().join('\n');
}

function isVPS(strs) {
    let stack = [];
    for (let j = 0; j < strs.length; j++) {
        if (strs[j] === '(') {
            stack.push('(');
        } else {
            if (stack.length === 0) {
                return 'NO';
            } else if (stack[stack.length - 1] !== '(') {
                return 'NO';
            } else stack.pop();
        }
    }
    if (stack.length > 0) {
        return 'NO';
    } else {
        return 'YES';
    }
}

console.log(solution(input));
