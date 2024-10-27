const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
    let parentheses = '()[]';
    let arr = input
        .map((ele) => ele.trim())
        .join('')
        .split('.');
    if (arr[arr.length - 1] === '') {
        arr.pop();
    }
    arr.pop();

    arr = arr.map((ele) => ele.split('').filter((val) => parentheses.includes(val)));


    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 0) {
            answer.push('yes');
        } else {
            answer.push(isVPS(arr[i]));
        }
    }

    return answer.flat().join('\n');
}

function isVPS(strs) {
    let stack = [];

    for (let j = 0; j < strs.length; j++) {
        if (strs[j] === '(') {
            stack.push('(');
        } else if (strs[j] === '[') {
            stack.push('[');
        } else if (strs[j] === ')') {
            if (stack.length === 0 || stack[stack.length - 1] !== '(') {
                return `no`;
            }
            stack.pop();
        } else {
            if (stack.length === 0 || stack[stack.length - 1] !== '[') {
                return `no`;
            }
            stack.pop();
        }
    }

    return stack.length === 0 ? 'yes' : 'no';
}

console.log(solution(input));
